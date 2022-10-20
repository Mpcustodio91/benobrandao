<?php

namespace App\Http\Controllers;

use App\Models\BankTransfer;
use App\Models\Client;
use App\Services\Pagarme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'verified'])->except(['validation', 'update', 'addBank', 'payment','values']);
    }
    public function index()
    {
        return Inertia::render('Client/Index',[
            'clients' => Client::orderBy('name')->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Inertia::render('Client/Show',[
            'client' => Client::with('transfBank','transfCrypto','contrato')->where('id',$id)->first()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        $client->update($request->all());
        if(isset($request->ipaddress)){
            $client->contrato == null ? $client->contrato()->create(['ipaddress' => $request->ipaddress]) : $client->contrato()->update(['ipaddress' => $request->ipaddress]);
        }
        return response()->json(['succes' => 'atualizado com sucesso'], 200);
    }

    public function addBank(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        if (isset($request->fileBank)) {
            $fileName = hash('sha256', time()) . '.' . $request->fileBank->extension();
            $request['file'] = $fileName;
            $request->fileBank->storeAs('DocsBanks', $fileName, 'public');
        }
        $client->transfBank()->create([
            'date'  => $request->bankDate,
            'value' => $request->value,
            'file'  => $request->file
        ]);

        return redirect()->back();
    }

    public function addCrypto(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        $client->transfCrypto()->create([
            'date'      => $request->criptoDate,
            'type'      => $request->type,
            'quantity'  => $request->quantity,
            'hash'      => $request->hash
        ]);

        return redirect()->back();
    }

    public function validation(Request $request)
    {        
        $client = Client::firstOrCreate(['email' => $request->email]);        
        return response()->json(['data' => $client->id], 200);
    }

    public function payment(Request $request)
    {        
        $pagarme = new Pagarme;
        if($request->method_payment == 'credit_card'){
            $dados = $this->creditCard($request->id);
            $numberCard = str_replace("-", "", $request->cardnumber);
            $dados['payments'][0]['credit_card']['installments'] = $request->installments;
            $dados['payments'][0]['credit_card']['card']['number'] = $numberCard;
            $dados['payments'][0]['credit_card']['card']['holder_name'] = $request->holder_name;
            $dados['payments'][0]['credit_card']['card']['exp_month'] = $request->exp_month;
            $dados['payments'][0]['credit_card']['card']['exp_year'] = $request->exp_year;
            $dados['payments'][0]['credit_card']['card']['cvv'] = $request->cvv;
            $data = $pagarme->creditCard($dados);
            return redirect()->route('success')->with('message', ['success' => 'realizado com sucesso']);
        } else {
            $dados = $this->pix($request->id);
            $data = $pagarme->pix($dados);
            return redirect()->route('success')->with('message', ['pix' => $data]);
        }
    }   

    public function creditCard($id)
    {
        $client = Client::with('transfBank','transfCrypto')->where('id', $id)->first();
        $telefone = $client->telefone;
        $telefone = str_replace("-", "", $telefone);
        $telefone = str_replace("(", "", $telefone);
        $telefone = str_replace(")", "", $telefone);
        $value = $client->transfBank->sum('value') + $client->transfCrypto->sum('quantity');
        switch ($value) {
            case $value <= 200000:
                $amount = 240000;
                break;

            case $value > 200000 && $value >= 500000:
                $amount = 450000;
                break;

            case $value > 500000:
                $amount = 600000;
                break;
        }
        $dados = [
            "customer" => [
                "name" => $client->name,
                "type" => "individual",
                "email" => $client->email,
                "document" => $this->limpaCPF_CNPJ($client->cpf),
                "document_type" => "CPF",
                "phones" => [
                    "mobile_phone" => [
                        "country_code" => 55,
                        "area_code" => substr($telefone, 0, 2),
                        "number" => substr($telefone, 3)
                    ]
                ],
            ],
            "items" => [
                [
                    "amount" => $amount,
                    "description" => "Contrato de prestação de serviços",
                    "quantity" => 1,
                    "code" => "1"
                ]
            ],
            "payments" => [
                [
                    "credit_card" => [
                        "card" => [
                            "billing_address" => [
                                "line_1" => $client->address . ',' . $client->number,
                                "line_2" => $client->complement,
                                "zip_code" => $client->zip_code,
                                "city" => $client->city,
                                "state" => $client->state,
                                "country" => "BR"
                            ]
                        ],
                        "operation_type" => "auth_and_capture",
                        "installments" => 2,
                        "statement_descriptor" => "PR"
                    ],
                    "payment_method" => "credit_card"
                ]
            ]
        ];
       
        return $dados;
    }

    public function pix($id)
    {
        $client = Client::where('id', $id)->first();
        $telefone = $client->telefone;
        $telefone = str_replace("-", "", $telefone);
        $telefone = str_replace("(", "", $telefone);
        $telefone = str_replace(")", "", $telefone);
        $value = $client->transfBank->sum('value') + $client->transfCrypto->sum('quantity');
        switch ($value) {
            case $value <= 200000:
                $amount = 240000;
                break;

            case $value > 200000 && $value >= 500000:
                $amount = 450000;
                break;

            case $value > 500000:
                $amount = 600000;
                break;
        }
        $dados = [
            "customer" => [
                "name" => $client->name,
                "type" => "individual",
                "email" => $client->email,
                "document" => $this->limpaCPF_CNPJ($client->cpf),
                "document_type" => "CPF",
                "phones" => [
                    "mobile_phone" => [
                        "country_code" => 55,
                        "area_code" => substr($telefone, 0, 2),
                        "number" => substr($telefone, 3)
                    ]
                ],
            ],
            "items" => [
                [
                    "amount" => $amount,
                    "description" => "Contrato de prestação de serviços",
                    "quantity" => 1,
                    "code" => "1"
                ]
            ],
            "payments" => [
                [
                    "Pix" => [
                        "expires_in" => 3600
                    ],
                    "payment_method" => "pix"
                ]
            ]
        ];

        return $dados;
    }

    function limpaCPF_CNPJ($valor)
    {
        $valor = trim($valor);
        $valor = str_replace(".", "", $valor);
        $valor = str_replace(",", "", $valor);
        $valor = str_replace("-", "", $valor);
        $valor = str_replace("/", "", $valor);
        return $valor;
    }

    public function values(Request $request)
    {        
        $client = Client::with('transfBank','transfCrypto')->where('id', 3)->first();
        $value = $client->transfBank->sum('value') + $client->transfCrypto->sum('quantity');
        switch ($value) {
            case $value <= 200000:
                $amount = 2400;
                break;

            case $value > 200000 && $value >= 500000:
                $amount = 4500;
                break;

            case $value > 500000:
                $amount = 6000;
                break;
        }        
        return response()->json(['data' =>$amount],200);
    }
}
