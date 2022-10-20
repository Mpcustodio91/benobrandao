<?php

namespace App\Services;

use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Http;

class Pagarme
{

    public function plans()
    {
        $auth = Http::accept('application/json')->withHeaders([
            "Authorization" => "Basic c2tfdGVzdF9EYVZZNW8ydXhIbUxXYjJwOg=="
        ])->get('https://api.pagar.me/core/v5/plans');

        return $auth->json();
    }    

    public function pix($dados)
    {        
        $auth = Http::accept('application/json')->withHeaders([            
            'authorization' => 'Basic c2tfdGVzdF9QVlFKdnFNaVh5VEdhTmxtOg=='
        ])->post('https://api.pagar.me/core/v5/orders',$dados);     
        if(isset($auth->json()['errors'])){
            $data = ['message' => 'Erro ao processar favor entrar em contato com o escritório'];
        }
        if($auth->json()['charges'][0]['last_transaction']['qr_code_url']){
            $data = $auth->json()['charges'][0]['last_transaction']['qr_code_url'];
        }
        
        return $data;
    }

    public function creditCard($dados)
    {
        $auth = Http::accept('application/json')->withHeaders([            
            'authorization' => 'Basic c2tfdGVzdF9QVlFKdnFNaVh5VEdhTmxtOg=='
        ])->post('https://api.pagar.me/core/v5/orders',$dados); 
        if(isset($auth->json()['errors'])){
            $data = ['error' => 'Erro ao processar favor entrar em contato com o escritório'];
        }
        if($auth->json()['status'] == 'paid'){
            $data = ['success' => 'Transação efetuada com sucesso'];
        }

        return $data;
    }
}
