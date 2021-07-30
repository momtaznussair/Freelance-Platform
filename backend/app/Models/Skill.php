<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{public $timestamps = false;
    use HasFactory;

    protected $fillable = [
        'name',
        'category'
      
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
