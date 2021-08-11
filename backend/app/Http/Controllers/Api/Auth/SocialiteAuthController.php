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

    protected function registerOrLoginUser(Request $request){
        $data = $request;
        $user = User::where('email','=',$data->email)->first();

        if (!$user){
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
        }

        // $client_id ='';
        // $freelancer_id = '';
        // if($user->type == 'client'){
        //     $client_id = $user->client->id;
        // }
        // else{
        //     $freelancer_id = $user->freelancer->id;
        // }

        $token = $user->createToken('auth_token')->plainTextToken;

        $data = [
            'token' => $token,
            'user' => new UserResource($user),
            // 'client_id' => $client_id,
            // 'freelancer_id' => $freelancer_id
        ];

        return $this->apiResponse($data);

    }

}
