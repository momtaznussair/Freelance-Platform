<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PortfolioImages;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class portfolioImagesController extends Controller
{
    use ApiResponseTrait;
    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'portfolio_id' => 'required|exists:portfolios,id',
            'portfolio_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $path = Storage::putFile('portfolios', $request->file('portfolio_image'));

        $image = PortfolioImages::create([
            'portfolio_id' => $request->portfolio_id,
            'image_path' => $path,
        ]);

        if($image){
            return $this->apiResponse($image);
        }

        return  $this->UnknownError();
    }
   

    public function destroy(Request $request, $id)
    {

        $image = PortfolioImages::find($id);

        if($image){
            Storage::delete($image->image_path);
            $image->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
