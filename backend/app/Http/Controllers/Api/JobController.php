<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
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
    }
}
