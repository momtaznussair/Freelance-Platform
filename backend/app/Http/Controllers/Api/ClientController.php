<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Company;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $client = Client::all();
        return $this->apiResponse($client);
    }

    public function show($id){
        $client = Client::find($id);

        if($client){
            return $this->apiResponse($client);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),$this->Rules());

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        
        $client = Client::create([
            'user_id' => $request->user_id,
        ]);

        if($client){

            if ($request->company_name)
            {
                Company::create([
                    'founder_id' => $client->id,
                    'name' => $request->company_name,
                ]);
            }
            return $this->apiResponse($client);
        }

        return  $this->UnknownError();
    }

    public function update(Request $request, $id){
        $validate = Validator::make($request->all(),$this->Rules());

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $client = Client::find($id);

        if(!$client){
            return $this->NotFoundError();
        }

        $client->update($request->all());

        if($client){
            return $this->apiResponse($client,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $client = Client::find($id);

        if($client){
            $client->jobs()->delete();
            $client->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

    public function Rules(){
        return [
            'user_id' => 'required|exists:users,id',
            'company_name' => 'string|min:3|max:255'
        ];
    }
}
