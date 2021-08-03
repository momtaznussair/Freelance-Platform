<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'registration_date',
        'user_id',
        'company_id'
    ];
    
    public function user(){

        return $this->belongsTo(User::class);
    }

    public function company(){

        return $this->belongsTo(Company::class);
    }

    public function jobs(){
        return $this->hasMany(Job::class);
    }
    
}
