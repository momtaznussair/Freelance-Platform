<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
    protected $table = 'educations';

    protected $fillable = [
        'institute',
        'area_of_study',
        'degree',
        'start_date',
        'graduation_date',
        'user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
