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
        // 'payment_style_id' ,
        'duration_id' ,
        'user_id',
        'job_id'
    ];

    public function job(){
        return $this->belongsTo(Job::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function duration(){
        return $this->belongsTo(Duration::class);
    }

    public function payment_style(){
        return $this->belongsTo(Payment_style::class);
    }
}
