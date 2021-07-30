<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{public $timestamps = false;
    use HasFactory;

    protected $fillable = [
        'registration_date',
        'location',
      
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function company(){
        return $this->belongsTo(Company::class);
    }
    public function job(){
        return $this->belongsTo(Job::class);
    }
}
