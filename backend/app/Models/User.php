<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Client;
use App\Models\Freelancer;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Cashier\Billable;

use function Illuminate\Events\queueable;

class User extends \TCG\Voyager\Models\User implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'first_name',
        'last_name',
        'email',
        'password',
        'gender',
        'img_link',
        'phone_number',
        'country',
        'city',
        'street',
        'zip_code',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function client(){
        return $this->hasOne(Client::class);
    }

    public function freelancer(){
        return $this->hasOne(Freelancer::class);
    }

    public function educations(){
        return $this->hasMany(Education::class);
    }

    public function languages(){
        return $this->belongsToMany(Language::class,'user_languages');
    }

    // protected static function booted()
    // {
    //     static::updated(queueable(function ($customer) {
    //         $customer->syncStripeCustomerDetails();
    //     }));
    // }
}
