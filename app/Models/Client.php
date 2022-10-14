<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'rg',
        'cpf',
        'telefone',
        'zip_code',
        'address',
        'number',
        'district',
        'complement',
        'city',
        'state',
        'contract',
        'letter',
        'transfer_bank_id',
        'transfer_crypto_id'
    ];

    public function transfBank()
    {
        return $this->hasMany(BankTransfer::class);
    }

    public function transfCrypto()
    {
        return $this->hasMany(CryptoTransfer::class);
    }
}
