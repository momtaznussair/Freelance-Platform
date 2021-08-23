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
use App\Http\Resources\UserResource;
use App\Models\Client;


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

    public function registerOrLoginUser(Request $request){
        $data = $request;
        // $user = User::where('email','=',$data->email)->first();

        $user = new User();
        $user->name = $data->name;
        $user->email = $data->email;
        $user->password = Hash::make("hgxv2Sm/g5F3qLk");
        $user->auth_id = $data->id;
        $user->first_name = $data->firstName;
        $user->last_name = $data->lastName;
        $user->country = $data->country;
        $user->city = $data->city;
        $user->street = $data->street_address;
        $user->zip_code = $data->zip_code;
        $user->type = $data->type;
        $user->save();

        $token = $user->createToken('auth_token')->plainTextToken;

        $data = [
            'token' => $token,
            'user' => new UserResource($user),
        ];

        // add as a  client
        if ($request->type == 'client')
        {
            $client = new Client();
            $client->user_id = $user->id;
            $client->save();
        }

        return $this->apiResponse($data);

    }

    public function checkEmail(Request $request){
        $user = User::where('email','=',$request->email)->first();
        
        if(!$user){
            return $this->apiResponse(false,'Welcome new user',200);
        }
        else{
            $token = $user->createToken('auth_token')->plainTextToken;

            $data = [
                'token' => $token,
                'user' => new UserResource($user),
            ];

            return $this->apiResponse($data);
        }
    }
}
