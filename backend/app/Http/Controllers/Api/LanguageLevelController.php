<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Language_level;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LanguageLevelController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $languageLevels = Language_level::all();
        return $this->apiResponse($languageLevels);
    }

    public function show($id){
        $languageLevel = Language_level::find($id);

        if(!$languageLevel){
            $this->NotFoundError();
        }
        return $this->apiResponse($languageLevel);
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $languageLevel = Language_level::create([
            'name' => $request->name
        ]);

        if($languageLevel){
            return $this->apiResponse($languageLevel);
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

        $languageLevel = Language_level::find($id);

        if(!$languageLevel){
            return $this->NotFoundError();
        }

        $languageLevel->update($request->all());
        if($languageLevel){
            return $this->apiResponse($languageLevel,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $languageLevel = Language_level::find($id);

        if($languageLevel){
            $languageLevel->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
