<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FreelancerResource;
use App\Models\Freelancer;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FreelancerController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $freelancers = Freelancer::all();
        return $this->apiResponse(FreelancerResource::collection($freelancers));
    }

    public function show($id){
        // $user = User::find($id);
        // $freelancer = $user->freelancer;
        $freelancer = Freelancer::find($id);

        if($freelancer){
            return $this->apiResponse(new FreelancerResource($freelancer));
        }
 
        return $this->NotFoundError();
    }

    public function store(Request $request){

        $validate = Validator::make($request->all(),[
            'user_id' => 'required|exists:users,id|unique:freelancers,user_id',
            'category_id' => 'required|exists:categories,id',
            'experience_id' => 'required|exists:experience_levels,id',
            'overview' => 'required|min:10',
            'job_title' => 'required|min:10|max:255',
            'hourly_rate' => 'required|numeric',
            'skills' => 'required|exists:skills,id',
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
            'hourly_rate' => $request->hourly_rate
        ]);

        if($freelancer){
            $freelancer->skills()->attach($request->skills === null ? [] : $request->skills);
            return $this->apiResponse($request->skills);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'user_id' => 'required|exists:users, id',
            'category_id' => 'required|exists:categories, id',
            'experience_id' => 'required|exists:experience_levels, id',
            'overview' => 'required|min:10',
            'job_title' => 'required|min:10|max:255',
            'hourly_rate' => 'required|numeric'
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
            $freelancer->portfolios()->delete();
            $freelancer->certificates()->delete();
            $freelancer->proposals()->delete();
            $freelancer->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }


    public function updateFreelancerTitle(Request $request ,$id){
        $freelancer = Freelancer::find($id);

        if(!$freelancer){
            return $this->NotFoundError();
        }

        $validator = Validator::make($request->all(), [
            'job_title'=> ['required','string','max:255','min:3'],
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $freelancer->job_title = $request->job_title;

        $freelancer->save();

        if($freelancer){
            return $this->apiResponse($freelancer,'',201);
        }

        return  $this->UnknownError();
    }

    public function updateFreelancerOverview(Request $request ,$id){
        $freelancer = Freelancer::find($id);

        if(!$freelancer){
            return $this->NotFoundError();
        }

        $validator = Validator::make($request->all(), [
            'overview'=> 'required|min:10',
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $freelancer->overview = $request->overview;

        $freelancer->save();

        if($freelancer){
            return $this->apiResponse($freelancer,'',201);
        }

        return  $this->UnknownError();
    }

    public function updateFreelancerHourly(Request $request ,$id){
        $freelancer = Freelancer::find($id);

        if(!$freelancer){
            return $this->NotFoundError();
        }

        $validator = Validator::make($request->all(), [
            'hourly_rate' => 'required|numeric'
        ]);


        if ($validator->fails())
        {
            return $this->apiResponse(null,$validator->errors(),200);
        }

        $freelancer->hourly_rate = $request->hourly_rate;

        $freelancer->save();

        if($freelancer){
            return $this->apiResponse($freelancer,'',201);
        }

        return  $this->UnknownError();
    }
}
