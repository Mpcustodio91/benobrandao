<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CryptoTransfer extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'date',
        'type',
        'quantity',
        'hash',
    ];
}
