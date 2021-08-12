<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreelancerSkill extends Model
{
    use HasFactory;

    protected $table = 'freelancer_skill';

    protected $fillable = [
        'freelancer_id','skill_id'
    ];

}
