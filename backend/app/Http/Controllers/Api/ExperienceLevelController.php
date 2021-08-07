<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Experience_level;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExperienceLevelController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $experience_levels = Experience_level::all();
        return $this->apiResponse($experience_levels);
    }

    public function show($id){
        $experience_level = Experience_level::find($id);

        if($experience_level){
            return $this->apiResponse($experience_level);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:experience_levels,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $experience_level = Experience_level::create([
            'name' => $request->name
        ]);

        if($experience_level){
            return $this->apiResponse($experience_level);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:experience_levels,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $experience_level = Experience_level::find($id);

        if(!$experience_level){
            return $this->NotFoundError();
        }

        $experience_level->update($request->all());
        if($experience_level){
            return $this->apiResponse($experience_level,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $experience_level = Experience_level::find($id);

        if($experience_level){
            $experience_level->jobs()->delete();
            $experience_level->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
