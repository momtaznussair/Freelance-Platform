<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id'
    ];

    protected $hidden = ['pivot'];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function jobs(){
        return $this->belongsToMany(Job::class , 'job_skills')->withTimestamps();
    }
    public function freelancers()
    {
        return $this->belongsToMany(Freelancer::class);
    }
}
