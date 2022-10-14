<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum','verified'])->except(['validation','update','addBank']);
    }
    public function index()
    {
        //
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
        dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

        return response()->json(['succes' => 'atualizado com sucesso'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function addBank(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        if(isset($request->fileBank)){
            $fileName = hash('sha256',time()).'.'.$request->fileBank->extension();
            $request['file'] = $fileName;
            $request->fileBank->storeAs('DocsBanks',$fileName,'public');
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
        $client = Client::firstOrCreate(['email' =>$request->email]);
        return response()->json(['data' => $client->id],200);
    }
}
