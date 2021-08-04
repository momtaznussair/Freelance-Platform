<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment_style;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentStyleController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $payment_styles = Payment_style::all();
        return $this->apiResponse($payment_styles);
    }

    public function show($id){
        $payment_style = Payment_style::find($id);

        if($payment_style){
            return $this->apiResponse($payment_style);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:payment_styles,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $payment_style = Payment_style::create([
            'name' => $request->name
        ]);

        if($payment_style){
            return $this->apiResponse($payment_style);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:payment_styles,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $payment_style = Payment_style::find($id);

        if(!$payment_style){
            return $this->NotFoundError();
        }

        $payment_style->update($request->all());
        if($payment_style){
            return $this->apiResponse($payment_style,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $payment_style = Payment_style::find($id);

        if($payment_style){
            $payment_style->jobs()->delete();
            $payment_style->proposals()->delete();
            $payment_style->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}