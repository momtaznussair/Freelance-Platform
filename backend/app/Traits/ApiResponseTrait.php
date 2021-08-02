<?php 

namespace App\Traits;

trait ApiResponseTrait {
    
    public function apiResponse($data = null , $error='', $code = 200){
        $array = [
            'data' => $data,
            'status' => in_array($code , $this->successCodes()) ? true : false,
            'msg' => $error
        ];

        return response($array ,$code);
    }


    public function successCodes(){
        return [
            200 , 201, 202
        ];
    }

    public function NotFoundError(){
        return $this->apiResponse(null,'Not Found',404);
    }

    public function UnknownError(){
        return  $this->apiResponse(null,'Unknown Error',400);
    }

}