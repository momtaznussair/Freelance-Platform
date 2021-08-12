<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLanguage extends Model
{
    use HasFactory;

    protected $table = 'user_languages';

    protected $fillable = [
        'user_id',
        'language_id',
        'language_level_id'
    ];
}
