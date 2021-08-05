<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PortfolioController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $portfolios = Portfolio::all();
        return $this->apiResponse($portfolios);
    }

    public function show($id){
        $portfolio = Portfolio::find($id);

        if(!$portfolio){
            $this->NotFoundError();
        }
        return $this->apiResponse($portfolio);
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),[
            'freelancer_id' => 'required|exists:freelancers,id',
            'title' => 'required|min:2',
            'description' => 'required|min:10',
            'image_link' => 'required:min:5',
            'attachment_link' => 'min:5',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $portfolio = Portfolio::create([
            'name' => $request->name
        ]);

        if($portfolio){
            return $this->apiResponse($portfolio);
        }

        return $this->UnknownError();
    }

    public function update(Request $request ,$id){
        $validate = Validator::make($request->all(),[
            'freelancer_id' => 'required|exists:freelancers,id',
            'title' => 'required|min:2',
            'description' => 'required|min:10',
            'image_link' => 'required:min:5'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $portfolio = Portfolio::find($id);

        if(!$portfolio){
            return $this->NotFoundError();
        }

        $portfolio->update($request->all());
        if($portfolio){
            return $this->apiResponse($portfolio,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $portfolio = Portfolio::find($id);

        if($portfolio){
            $portfolio->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
