<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'payment_amount',
        'job_title',
        'attachment',
        'client_id',
        'duration_id',
        'experience_id',
        'payment_style_id',
        'category_id',
        'from',
        'to',
    ];

    protected $hidden = ['pivot'];

    public function client(){
        return $this->belongsTo(Client::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function duration(){
        return $this->belongsTo(Duration::class);
    }

    public function experience(){
        return $this->belongsTo(Experience_level::class);
    }

    public function payment_style(){
        return $this->belongsTo(Payment_style::class);
    }

    public function skills(){
        return $this->belongsToMany(Skill::class,'job_skills')->withTimestamps();
    }

    public function proposals(){
        return $this->hasMany(Proposal::class);
    }
}
