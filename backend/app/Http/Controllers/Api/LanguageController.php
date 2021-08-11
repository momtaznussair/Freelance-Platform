<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LanguageController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $languages = Language::all();
        return $this->apiResponse($languages);
    }

    public function show($id){
        $language = Language::find($id);

        if(!$language){
            $this->NotFoundError();
        }
        return $this->apiResponse($language);
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $language = Language::create([
            'name' => $request->name
        ]);

        if($language){
            return $this->apiResponse($language);
        }

        return $this->UnknownError();
    }

    public function update(Request $request ,$id){
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $language = Language::find($id);

        if(!$language){
            return $this->NotFoundError();
        }

        $language->update($request->all());
        if($language){
            return $this->apiResponse($language,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $language = Language::find($id);

        if($language){
            $language->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
