<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contract;
use App\Models\LetterOfAttorney;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PDFController extends Controller
{
    public function contract($id = null, $pdf = null, $download = null)
    {        
        $client = Client::with('contrato')->where('id',$id)->first();
        $contract = Contract::where('companie_id',$pdf)->first();  
        $t= $contract->description;
        $name = str_replace("-name-",$client->name,$t);
        $rg = str_replace("-rg-",$client->rg,$name);
        $cpf = str_replace("-cpf-",$client->cpf,$rg);
        $address = str_replace("-address-",$client->address,$cpf);
        $number = str_replace("-number-",$client->number,$address);
        $complement = str_replace("-complement-",$client->complement,$number);
        $district = str_replace("-district-",$client->district,$complement);
        $city = str_replace("-city-",$client->city,$district);
        $state = str_replace("-state-",$client->state,$city);
        $zip_code = str_replace("-zip_code-",$client->zip_code,$state);
        $description = $zip_code;
        $client->contrato == null ? $client->contrato()->create(['contract' => $description]) : $client->contrato()->update(['contract' => $description]);
        $pdf = Pdf::setOptions(['isHtml5ParserEnabled' => true , 'isRemoteEnabled' => true])->loadView('pdf.contrato',['data' =>$client,'description' => $description]);            
        if($download == 1){
            return $pdf->download('contrato -'.$client->name.'.pdf');
        }else{
            return $pdf->stream('contrato -'.$client->name.'.pdf');
        }
    }

    public function letterOfAttorney($id = null, $pdf = null)
    {
        $client = Client::where('id',$id)->first();
        
        $contract = LetterOfAttorney::where('companie_id',$pdf)->first();  
        $t= $contract->description;
        $name = str_replace("-name-",$client->name,$t);
        $rg = str_replace("-rg-",$client->rg,$name);
        $cpf = str_replace("-cpf-",$client->cpf,$rg);
        $address = str_replace("-address-",$client->address,$cpf);
        $number = str_replace("-number-",$client->number,$address);
        $complement = str_replace("-complement-",$client->complement,$number);
        $district = str_replace("-district-",$client->district,$complement);
        $city = str_replace("-city-",$client->city,$district);
        $state = str_replace("-state-",$client->state,$city);
        $zip_code = str_replace("-zip_code-",$client->zip_code,$state);
        $description = $zip_code;
        // dd($client->subscription);
        $client->contrato == null ? $client->contrato()->create(['letter' => $description]) : $client->contrato()->update(['letter' => $description]);
        $pdf = Pdf::setOptions(['isHtml5ParserEnabled' => true , 'isRemoteEnabled' => true])->loadView('pdf.procuracao',['data' =>$client,'description' => $description])->stream('procuração - '.$client->name.'.pdf');
        return $pdf;
    }
}
