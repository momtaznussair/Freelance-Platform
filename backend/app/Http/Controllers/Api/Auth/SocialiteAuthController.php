<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;



class SocialiteAuthController extends Controller
{
    use ApiResponseTrait;
    // Google / Gmail
    public function redirectToGoogle(){
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback(){
        $user = Socialite::driver('google')->stateless()->user();
        $this->registerOrLoginUser($user);
    }

    // Linked in
    public function redirectToLinkedin(){
        return Socialite::driver('linkedin')->redirect();
    }

    public function handleLinkedinCallback(){
        $user = Socialite::driver('linkedin')->stateless()->user();
        $this->registerOrLoginUser($user);
        // dd($user);
    }

    protected function registerOrLoginUser($data){
        $user = User::where('email','=',$data->email)->first();

        if (!$user){
            $user = new User();
            $user->username = $data->name;
            $user->email = $data->email;
            $user->password = Hash::make("hgxv2Sm/g5F3qLk");
            $user->auth_id = $data->id;
            $user->first_name = $data->firstName;
            $user->last_name = $data->lastName;
            $user->country = $data->location->country;
            $user->city = $data->location->city;
            $user->street = $data->location->street_address;
            $user->zip_code = $data->location->zip_code;
            $user->type = $data->type;
            $user->save();
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        // return response()->json([
        //         'access_token' => $token,
        //         'token_type' => 'Bearer',
        // ]);

        $data = [
                'access_token' => $token,
                'token_type' => 'Bearer',
        ];

        return $this->apiResponse($data);

    }

}
