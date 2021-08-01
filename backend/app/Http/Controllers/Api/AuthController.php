<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $token = $request->bearerToken();

        $validator = Validator::make($request->all(), [
            'username'=> [Rule::requiredIf(!$token),'string','max:255','min:3'],
            'first_name' => 'required|string|min:3|max:255',
            'last_name' => 'required|string|min:3|max:255',
            'email' => [Rule::requiredIf(!$token),'email','unique:users,email','max:255'],
            'password' => [Rule::requiredIf(!$token), 'string', 'min:8','max:255', 'confirmed'],
            'gender' => 'required|in:male,female',
            'img_link' => 'nullable|image|max:512|mimes:png,jpg',
            'phone_number' => 'min:11|numeric',
            'country' => 'required',
            'city' => 'required',
            'street' => 'required',
            'zip_code' => 'required'
        ]);
        
            
        if ($validator->fails())
        {
            return Response::json($validator->errors());
        }
        
        $user = new User();

        if(!$token){
            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
        }

        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->gender = $request->gender;
        $user->phone_number = $request->phone_number;
        $user->country =$request->country;
        $user->city = $request->city;
        $user->street = $request->street;
        $user->zip_code = $request->zip_code;

        if ($request->hasFile('img_link'))
        {
            $path = Storage::putFile('users', $request->file('img_link'));
             $user->img_link = $path;
        }
        
        $user->save();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'msg' => "User registered successfully"
        ]);
    }



    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
            
        if ($validator->fails())
        {
            return Response::json($validator->errors());
        }

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password) && $user->auth_id === null) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken('auth_token')->plainTextToken;
    }


    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
                'msg' => "User logout successfully"
        ]);
    }
    
}