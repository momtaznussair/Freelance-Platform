<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    use ApiResponseTrait;

    public function index()
    {
        $jobs = Job::all();
        return $this->apiResponse($jobs);
    }

    public function show($id)
    {
        $job = Job::find($id);
        $skills = $job->skills();

        $data = [$job , $skills];
        if (!$job) {
            $this->NotFoundError();
        }
        return $this->apiResponse($data);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
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

        if ($validate->fails()) {
            return  $this->apiResponse(null, $validate->errors(), 422);
        }

        $job = Job::create(
            $request->all()
        );

        $job->skills()->attach($request->skill === null ? [] : $request->skill);


        if ($job) {
            return $this->apiResponse($job);
        }

        return $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
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

        if ($validate->fails()) {
            return  $this->apiResponse(null, $validate->errors(), 422);
        }

        $job = Job::find($id);

        if (!$job) {
            return $this->NotFoundError();
        }

        $job->update($request->all());

        $job->skills()->sync($request->skill === null ? [] : $request->skills);
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
            $job->delete();
            return $this->apiResponse(true, '', 200);
        }

        return $this->NotFoundError();
    }
}