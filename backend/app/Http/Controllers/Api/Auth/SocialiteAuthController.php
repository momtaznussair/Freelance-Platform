<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;


class SocialiteAuthController extends Controller
{

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
            $user->save();
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
        ]);

    }

}