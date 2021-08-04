<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6897d0e0b4aeb62af68a4b2fcca8f0efed9fa376
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $jobs = Job::all();
        return $this->apiResponse($jobs);
    }

    public function show($id){
        $job = Job::find($id);
        $skills = $job->skills();

        $data = [$job , $skills];
        if(!$job){
            $this->NotFoundError();
        }
        return $this->apiResponse($data);
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),[
            'description' => 'required|min:10',
            'payment_amount' => 'required|numeric',
            'job_title' => 'required|min:3',
            'attachment' => 'min:5',
            'skill' => 'required|exists:skills,id',
            'client_id' => 'required|exists:clients,id',
            'duration_id' => 'required|exists:durations,id',
            'experience_id' => 'required|exists:experience_levels,id',
            'payment_style_id' => 'required|exists:payment_styles,id',
            'category_id' => 'required|exists:categories,id',
            'language_id' => 'required|exists:languages,id',
            'language_level_id' => 'required|exists:language_levels,id',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $job = Job::create(
            $request->all()
        );
        
        $job->skills()->attach($request->skill === null ? [] : $request->skill);

        

        if($job){
            return $this->apiResponse($job);
        }

        return $this->UnknownError();
    }

    public function update(Request $request ,$id){
        $validate = Validator::make($request->all(),[
            'description' => 'required|min:10',
            'payment_amount' => 'required|numeric',
            'job_title' => 'required|min:3',
            'attachment' => 'min:5',
            'skill' => 'required|exists:skills,id',
            'client_id' => 'required|exists:clients,id',
            'duration_id' => 'required|exists:durations,id',
            'experience_id' => 'required|exists:experience_levels,id',
            'payment_style_id' => 'required|exists:payment_styles,id',
            'category_id' => 'required|exists:categories,id',
            'language_id' => 'required|exists:languages,id',
            'language_level_id' => 'required|exists:language_levels,id',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $job = Job::find($id);

        if(!$job){
            return $this->NotFoundError();
        }

        $job->update($request->all());

        $job->skills()->sync($request->skill === null ? [] : $request->skills);
        if($job){
            return $this->apiResponse($job,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $job = Job::find($id);

        if($job){
            $job->skills()->detach();
            $job->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
<<<<<<< HEAD
=======
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(){
        $jobs=Job::all();
        return $jobs;
    }
    public function store(Request $request){
       $jobs=Job::create([

            'description'=>$request->description,
            'payment_type'=>$request->payment_type,
            'payment_amount'=>$request->payment_amount,
            'job_title'=>$request->job_title,
            'attatchment'=>$request->attatchment,
            'skill'=>$request->skill,
            // 'client_id'=>$request->client_id,
            // 'duration_id'=>$request->duration_id,
            // 'experience_id'=>$request->experience_id,
            // 'payment_style_id'=>$request->payment_style_id,
            // 'category_id'=>$request->category_id,
            // 'language_id'=>$request->language_id,
            // 'language_level_id'=>$request->language_level_id,
            													
            
        ]);

        return $jobs;
    }

    public function update(Request $request, $id)
    {

    $jobs=Job::find($id);
    $jobs->update($request->all());
        return $jobs;

}
public function destroy($id)
    {
    
        return Job::destroy($id);
>>>>>>> cb84c5474033ef42f7bb23c395ed721e6cb86837
=======
>>>>>>> 6897d0e0b4aeb62af68a4b2fcca8f0efed9fa376
    }
}
