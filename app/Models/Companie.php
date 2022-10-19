<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Companie extends Model
{
    use HasFactory;

    protected $fillable = ['name','image'];

    public function contract()
    {
        return $this->hasOne(Contract::class,'companie_id','id');
    }

    public function letter()
    {
        return $this->hasOne(LetterOfAttorney::class,'companie_id','id');
    }
}
