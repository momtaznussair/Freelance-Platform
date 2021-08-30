<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SkillController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $skills = Skill::all();
        return $this->apiResponse($skills);
    }

    public function show($id){
        $skill = Skill::find($id);

        if($skill){
            return $this->apiResponse($skill);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){

        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:skills,name',
            'category_id' => 'required|exists:categories,id'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $skill = skill::create([
            'name' => $request->name,
            'category_id' => $request->category_id,
        ]);

        if($skill){
            return $this->apiResponse($skill);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:skills,name',
            'category_id' => 'required|exists:categories,id'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $skill = Skill::find($id);

        if(!$skill){
            return $this->NotFoundError();
        }

        $skill->update($request->all());
        if($skill){
            return $this->apiResponse($skill,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $skill = Skill::find($id);

        if($skill){
            $skill->jobs()->detach();
            $skill->freelancers()->detach();
            $skill->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

}
