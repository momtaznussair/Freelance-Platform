<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioImages extends Model
{
    use HasFactory;

    protected $fillable = [
        'portfolio_id',
        'image_path',
    ];

    public function portfolio()
    {
        return $this->belongsTo(Portfolio::class);
    }
}
