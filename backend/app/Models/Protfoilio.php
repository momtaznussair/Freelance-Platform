<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Protfoilio extends Model
{
    use HasFactory;

    protected $fillable =[
        'freelancer_id',
        'title',
        'description',
        'image_link',
        'attachment_link'
    ];
}
