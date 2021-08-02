<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language_level extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];
    public function job(){
        return $this->belongsTo(Job::class);
    }

}
