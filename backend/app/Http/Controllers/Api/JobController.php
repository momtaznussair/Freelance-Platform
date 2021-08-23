<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobResource;
use App\Models\Freelancer;
use App\Models\FreelancerSkill;
use App\Models\Job;
use App\Models\User;
use App\Notifications\JobNotification;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    use ApiResponseTrait;

    public function index()
    {
        $jobs = Job::with('skills')->get();
        return $this->apiResponse(JobResource::collection($jobs));
    }

    public function show($id)
    {

        // $job = Job::with(['skills','category','duration','experience','payment_style','client.user'])->find($id);
        $job = Job::find($id);

        if (!$job) {
            $this->NotFoundError();
        }
        // return $this->apiResponse($job);
        return $this->apiResponse(new JobResource($job));

    }

    public function store(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'description' => 'required|min:10',
            'payment_amount' => 'numeric',
            'job_title' => 'required|min:3',
            // 'attachment' => 'min:5',
            'skill' => 'required|exists:skills,id',
            'client_id' => 'required|exists:clients,id',
            'duration_id' => 'exists:durations,id',
            'experience_id' => 'required|exists:experience_levels,id',
            'payment_style_id' => 'required|exists:payment_styles,id',
            'category_id' => 'required|exists:categories,id',
            'from' => 'numeric',
            'to' => 'numeric',
        ]);

        if ($validate->fails()) {
            return  $this->apiResponse(null, $validate->errors(), 200);
        }

        $job = Job::create(
            $request->all()
        );

        $job->skills()->attach($request->skill === null ? [] : $request->skill);


        if ($job) {
            $skillsIDs = $job->skills;
            $freelancersIDs =  FreelancerSkill::select('freelancer_id')->whereIn('skill_id',$skillsIDs)->get();
            foreach($freelancersIDs as $id){
                $freelancer = Freelancer::where('id' , $id->freelancer_id)->first();
                $user = User::where('id' , $freelancer->user_id)->first();
                $user->notify(new JobNotification($job->job_title));
            }

            return $this->apiResponse($job);
        }

        // return $this->UnknownError();
        return $this->apiResponse(true ,'',200);
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'description' => 'required|min:10',
            'payment_amount' => 'numeric',
            'job_title' => 'required|min:3',
            'attachment' => 'min:5',
            'skill' => 'required|exists:skills,id',
            'client_id' => 'required|exists:clients,id',
            'duration_id' => 'exists:durations,id',
            'experience_id' => 'required|exists:experience_levels,id',
            'payment_style_id' => 'required|exists:payment_styles,id',
            'category_id' => 'required|exists:categories,id',
            'from' => 'numeric',
            'to' => 'numeric',
        ]);

        if ($validate->fails()) {
            return  $this->apiResponse(null, $validate->errors(), 422);
        }

        $job = Job::find($id);

        if (!$job) {
            return $this->NotFoundError();
        }

        $job->update($request->all());

        $job->skills()->sync($request->skill === null ? [] : $request->skill);
        if ($job) {
            return $this->apiResponse($job, '', 201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $job = Job::find($id);

        if ($job) {
            $job->skills()->detach();
            $job->proposals()->delete();
            $job->delete();
            return $this->apiResponse(true, '', 200);
        }

        return $this->NotFoundError();
    }
}
