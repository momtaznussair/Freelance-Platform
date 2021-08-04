<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'payment_amount',
        'current_state' ,
        'cover_letter',
        'attachment',
        'client_grade' ,
        'client_comment' ,
        'freelancer_grade' ,
        'freelancer_comment' ,
        'payment_style_id' ,
        'duration_id' ,
        'user_id',
        'job_id'
    ];

    
}
