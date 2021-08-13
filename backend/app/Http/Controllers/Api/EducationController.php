<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Education;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EducationController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $educations = Education::all();
        return $this->apiResponse($educations);
    }

    public function show($id){
        $education = Education::find($id);

        if($education){
            return $this->apiResponse($education);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){

        $validate = Validator::make($request->all(),$this->Rules());

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $education = Education::create([
            'institute' => $request->institute,
            'area_of_study' => $request->area_of_study,
            'degree' => $request->degree,
            'start_date' => $request->start_date,
            'graduation_date' => $request->graduation_date,
            'user_id' => $request->user_id,
        ]);

        if($education){
            return $this->apiResponse($education);
        }

        return  $this->UnknownError();
    }

    public function update(Request $request, $id){
        $validate = Validator::make($request->all(),$this->Rules());

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $education = Education::find($id);

        if(!$education){
            return $this->NotFoundError();
        }

        $education->update($request->all());

        if($education){
            return $this->apiResponse($education,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $education = Education::find($id);

        if($education){
            $education->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

    public function Rules(){
        return [
            'institute' => 'required|string|min:3|max:255',
            'area_of_study' => 'required|string|min:2|max:255',
            'degree' => 'required|string|min:3|max:255',
            'start_date' => 'required|date',
            'graduation_date' => 'required|date',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
