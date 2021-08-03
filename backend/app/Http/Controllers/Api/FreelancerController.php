<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Freelancer;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FreelancerController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $freelancers = Freelancer::all();
        return $this->apiResponse($freelancers);
    }

    public function show($id){
        $freelancer = freelancer::find($id);

        if($freelancer){
            return $this->apiResponse($freelancer);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
           'user_id' => 'required|exists:users,id',
           'category_id' => 'required|exists:categories,id',
           'experience_id' => 'required|exists:experience_levels,id',
           'overview' => 'required|min:512',
           'job_title' => 'required|min:10|max:255',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        
        $freelancer = freelancer::create([
            'user_id' => $request->user_id,
           'category_id' => $request->category_id,
           'experience_id' => $request->experience_id,
           'overview' => $request->overview,
           'job_title' => $request->job_title,
        ]);

        if($freelancer){
            return $this->apiResponse($freelancer);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'user_id' => 'required|exists:users, id',
           'category_id' => 'required|exists:categories, id',
           'experience_id' => 'required|exists:experience_levels, id',
           'overview' => 'required|min:512',
           'job_title' => 'required|min:10|max:255',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $freelancer = freelancer::find($id);

        if(!$freelancer){
            return $this->NotFoundError();
        }

        $freelancer->update($request->all());
        if($freelancer){
            return $this->apiResponse($freelancer,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $freelancer = freelancer::find($id);

        if($freelancer){
            $freelancer->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

}
