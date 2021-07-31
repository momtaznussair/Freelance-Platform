<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $token = $request->bearerToken();

        $validator = Validator::make($request->all(), [
            // 'username' => "requiredIf($token)|string|max:255|min:3",
            'username'=> [Rule::requiredIf(!$token),'string','max:255','min:3'],
            'first_name' => 'required|string|min:3|max:255',
            'last_name' => 'required|string|min:3|max:255',
            // 'email' => "requiredIf(!$token)|email|unique:users,email|max:255",
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
            
        $path = Storage::putFile('users', $request->file('img'));
        User::create([
            'username' => $request->username,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' =>Hash::make($request->password),
            'gender' => $request->gender,
            'img_link' => $path,
            'phone_number' => $request->phone_number,
            'country' => $request->country,
            'city' => $request->city,
            'street' => $request->street,
            'zip_code' => $request->zip_code,
        ]);
            
        $data = [
            'msg' => "data Created successfully",
        ];
            
        return Response::json($data);
            
    

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
        ]);
    }

}
