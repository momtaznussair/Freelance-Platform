<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Freelancer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'overview',
        'job_title',
        'experience_id',
        'hourly_rate',
    ];

    public function portfolios(){
        return $this->hasMany(Portfolio::class);
    }

    public function user(){

        return $this->belongsTo(User::class);
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function experience(){
        return $this->belongsTo(Experience_level::class);
    }

}
