<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{public $timestamps = false;
    use HasFactory;

    protected $fillable = [

    'description',
    'payment_type',
    'payment_amount',
    'job_title',
    'attatchment',
    'skill',
];
}
