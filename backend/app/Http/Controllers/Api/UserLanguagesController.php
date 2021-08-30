<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserLanguage;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserLanguagesController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $userLanguages = UserLanguage::all();
        return $this->apiResponse($userLanguages);
    }

    public function show($id){
        $userLanguage = UserLanguage::find($id);

        if($userLanguage){
            return $this->apiResponse($userLanguage);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){

        $validate = Validator::make($request->all(),[
            'user_id' => 'required|exists:users,id',
            'language_id' => 'required|exists:languages,id',
            'language_level_id' => 'required|exists:language_levels,id',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $userLanguage = UserLanguage::create([
            'user_id' => $request->user_id,
            'language_id' => $request->language_id,
            'language_level_id' => $request->language_level_id,
        ]);

        if($userLanguage){
            return $this->apiResponse($userLanguage);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'user_id' => 'required|exists:users,id',
            'language_id' => 'required|exists:languages,id',
            'language_level_id' => 'required|exists:language_levels,id',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $userLanguage = UserLanguage::find($id);

        if(!$userLanguage){
            return $this->NotFoundError();
        }

        $userLanguage->update($request->all());
        if($userLanguage){
            return $this->apiResponse($userLanguage,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $userLanguage = UserLanguage::find($id);

        if($userLanguage){
            $userLanguage->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

}
