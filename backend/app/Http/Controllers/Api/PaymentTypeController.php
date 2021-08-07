<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment_type;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentTypeController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $payment_types = Payment_type::all();
        return $this->apiResponse($payment_types);
    }

    public function show($id){
        $payment_type = Payment_type::find($id);

        if($payment_type){
            return $this->apiResponse($payment_type);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:payment_types,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $payment_type = Payment_type::create([
            'name' => $request->name
        ]);

        if($payment_type){
            return $this->apiResponse($payment_type);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:payment_types,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $payment_type = Payment_type::find($id);

        if(!$payment_type){
            return $this->NotFoundError();
        }

        $payment_type->update($request->all());
        if($payment_type){
            return $this->apiResponse($payment_type,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $payment_type = Payment_type::find($id);

        if($payment_type){
            $payment_type->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
