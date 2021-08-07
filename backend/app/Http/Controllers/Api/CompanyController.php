<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Company;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $companies = Company::all();
        return $this->apiResponse($companies);
    }

    public function show($id){
        $company = company::find($id);

        if($company){
            return $this->apiResponse($company);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:3|max:255',
            'location' => 'required|min:10|max|255',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }


        $founder_id = $id = $request->user()->client->id;
        $company = company::create([
            'name' => $request->name,
            'location' => $request->location,
            'founder_id' => $founder_id,
        ]);

        if($company){
            return $this->apiResponse($company);
        }

        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:3|max:255',
            'location' => 'required|min:10|max|255',
        ]);

        if($validate->fails()){

            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $company = company::find($id);

        if(!$company){
            return $this->NotFoundError();
        }

        $company->update($request->all());

        if($company){

            return $this->apiResponse($company,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy(Request $request, $id)
    {
        $founder_id = $id = $request->user()->client->id;

        $company = company::where([ ['id','==', $id], ['founder_id', '==', $founder_id] ])->first();

        if($company){
            $company->clients()->delete();
            $company->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

}
