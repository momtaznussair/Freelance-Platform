<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Models\Duration;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DurationController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $durations = Duration::all();
        return $this->apiResponse($durations);
    }

    public function show($id){
        $duration = Duration::find($id);

        if($duration){
            return $this->apiResponse($duration);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:durations,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $duration = Duration::create([
            'name' => $request->name
        ]);

        if($duration){
            return $this->apiResponse($duration);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:durations,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $duration = Duration::find($id);

        if(!$duration){
            return $this->NotFoundError();
        }

        $duration->update($request->all());
        if($duration){
            return $this->apiResponse($duration,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $duration = Duration::find($id);

        if($duration){
            $duration->jobs()->delete();
            $duration->proposals()->delete();
            $duration->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
