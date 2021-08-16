<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Proposal;
use App\Notifications\ProposalNotification;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProposalController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $proposals = Proposal::all();
        return $this->apiResponse($proposals);
    }

    public function show($id){
        $proposal = Proposal::with('job')->find($id);
        // $proposal = Proposal::find($id);

        if(!$proposal){
            $this->NotFoundError();
        }
        return $this->apiResponse($proposal);
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),$this->Rules());

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $proposal = Proposal::create($request->all());

        if($proposal){
            // Send Notification to Client when freelancer make a proposal
            $client = $proposal->job->client->user;
            $client->notify(new ProposalNotification($proposal->cover_letter));
            
            return $this->apiResponse($proposal);
        }

        return $this->UnknownError();
    }

    public function update(Request $request ,$id){
        $validate = Validator::make($request->all(),$this->Rules());

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $proposal = Proposal::find($id);

        if(!$proposal){
            return $this->NotFoundError();
        }

        $proposal->update($request->all());
        if($proposal){
            return $this->apiResponse($proposal,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $proposal = Proposal::find($id);

        if($proposal){
            $proposal->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }


    public function Rules(){
        return [
            'payment_amount' => 'required|numeric',
            // 'current_state' => 'required',
            'cover_letter' => 'required|min:5',
            'attachment'=>'string',
            'client_grade' => 'numeric',
            'client_comment' => 'string|min:5',
            'freelancer_grade' => 'numeric',
            'freelancer_comment' => 'string|min:5',
            // 'payment_style_id' => 'required|exists:payment_styles,id',
            'duration_id' => 'required|exists:durations,id',
            'user_id' => 'required|exists:users,id',
            'job_id' => 'required|exists:jobs,id'
        ];
    }
}
