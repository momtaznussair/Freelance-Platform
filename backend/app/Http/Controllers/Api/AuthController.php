<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use App\Models\Client;


class AuthController extends Controller
{
    use ApiResponseTrait;
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
            'img_link' => 'nullable|image|mimes:png,jpg',
            'phone_number' => 'min:11|numeric',
            'country' => 'required',
            'city' => 'required',
            'street' => 'required',
            'zip_code' => 'required',
            'type' => 'required',
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $user = new User();

        if(!$token){
            $user->name = $request->username;
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
        $user->type = $request->type;

        if ($request->hasFile('img_link'))
        {
            $user_image = request('img_link');
            $user_image_new_name = time() . $user_image->getClientOriginalName();
            $user_image->move('uploads/users', $user_image_new_name);
            $user->img_link = 'uploads/users/' . $user_image_new_name;

            // $path = Storage::putFile('users', $request->file('img_link'));
            // $user->img_link = $request->$path;

            // Storage::putFile('users', $request->file('img_link'));
            // $user->img_link = $request->img_link;
            
            // $user->save();
        }
        $user->save();
        // add as a  client
        // add as a  client
        if ($request->type == 'client')
        {
            $client = new Client();
            $client->user_id = $user->id;
            $client->registration_date = now();
            $client->save();
        }
        
        $token = $user->createToken('auth_token')->plainTextToken;

        $data = [
                'access_token' => $token,
                'user' => new UserResource($user),
        ];

        // add as a  client
        if ($request->type == 'client')
        {
            $client = new Client();
            $client->user_id = $user->id;
            $client->registration_date = now();
            $client->save();
        }

        return $this->apiResponse($data,'User registered successfully');
    }



    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        $data = [
            'token' => $token,
            'user' => new UserResource($user),
        ];

        return $this->apiResponse($data);

    }


    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return $this->apiResponse(true,'User logout successfully',200);
    }



    public function updateUserEmailAndUsername(Request $request ,$id){
        $user = User::find($id);

        if(!$user){
            return $this->NotFoundError();
        }

        if(!Hash::check($request->password, $user->password)){
            return $this->apiResponse(null , 'Password Not Matches' , 200);
        }

        $validator = Validator::make($request->all(), [
            'username'=> ['required','string','max:255','min:3'],
            'email' => ['required','email','unique:users,email','max:255'],
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $user->name = $request->username;
        $user->email = $request->email;

        $user->save();

        if($user){
            return $this->apiResponse($user,'',201);
        }

        return  $this->UnknownError();
    }

    public function updateUserPhoneAndLocation(Request $request ,$id){
        $user = User::find($id);

        if(!$user){
            return $this->NotFoundError();
        }

        if(!Hash::check($request->password, $user->password)){
            return $this->apiResponse(null , 'Password Not Matches' , 200);
        }

        $validator = Validator::make($request->all(), [
            'phone_number' => 'min:11|numeric',
            'country' => 'required',
            'city' => 'required',
            'street' => 'required',
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $user->phone_number = $request->phone_number;
        $user->country = $request->country;
        $user->city = $request->city;
        $user->street = $request->street;
        $user->save();

        if($user){
            return $this->apiResponse($user,'',201);
        }

        return  $this->UnknownError();
    }

    public function updateUserPassword(Request $request ,$id){
        $user = User::find($id);

        if(!$user){
            return $this->NotFoundError();
        }

        if(!Hash::check($request->password, $user->password)){
            return $this->apiResponse(null , 'Password Not Matches' , 200);
        }

        $validator = Validator::make($request->all(), [
            'new_password' => ['required', 'string', 'min:8','max:255', 'confirmed']
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        if($user){
            return $this->apiResponse($user,'',201);
        }

        return  $this->UnknownError();
    }
}
