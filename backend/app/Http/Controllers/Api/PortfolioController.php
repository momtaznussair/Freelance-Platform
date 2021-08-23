<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Models\Portfolio;
use App\Models\PortfolioImages;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $portfolios = Portfolio::all();
        return $this->apiResponse(PortfolioResource::collection($portfolios));
    }

    public function show($id){
        $portfolio = Portfolio::find($id);

        if(!$portfolio){
            $this->NotFoundError();
        }
        return $this->apiResponse(new PortfolioResource($portfolio));
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(),[
            'freelancer_id' => 'required|exists:freelancers,id',
            'title' => 'required|min:2',
            'description' => 'required|min:10',
            'image' => 'required',
            'image.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'attachment' => 'nullable|file|mimes:xlsx,xls,csv,jpg,jpeg,png,bmp,doc,docx,pdf,tif,tiff',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $portfolio = new Portfolio();
        $portfolio->freelancer_id = $request->freelancer_id;
        $portfolio->title = $request->title;
        $portfolio->description = $request->description;

        if ($request->hasFile('attachment'))
        {
            $path = Storage::putFile('attachments/portfolios', $request->file('attachment'));
            $portfolio->attachment_link = $path;
        }

        $portfolio->save();
        
        foreach($request->file('image') as $image)
        {
            $path = Storage::putFile('portfolios', $image);

            $image = PortfolioImages::create([
                'portfolio_id' => $portfolio->id,
                'image_path' => $path,
            ]);

        }

        if($portfolio){
            return $this->apiResponse(new PortfolioResource($portfolio));
        }

        return $this->UnknownError();
    }

    public function update(Request $request ,$id){
        $validate = Validator::make($request->all(),[
            'freelancer_id' => 'required|exists:freelancers,id',
            'title' => 'required|min:2',
            'description' => 'required|min:10',
            'attachment' => 'nullable|file|mimes:xlsx,xls,csv,jpg,jpeg,png,bmp,doc,docx,pdf,tif,tiff',
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $portfolio = Portfolio::find($id);

        if(!$portfolio){
            return $this->NotFoundError();
        }

        $attachment_path = $portfolio->attachment_link;

        if ($request->hasFile('attachment'))
        {
            Storage::delete("$attachment_path");
            $path = Storage::putFile('attachments/portfolios', $request->file('attachment'));
        }

        $portfolio->freelancer_id = $request->freelancer_id;
        $portfolio->title = $request->title;
        $portfolio->description = $request->description;
        $portfolio->attachment_link = $request->attachment_link;
        $portfolio->save();

        if($portfolio){
            return $this->apiResponse(new PortfolioResource($portfolio),'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id){
        $portfolio = Portfolio::find($id);

        if($portfolio){
            $images = $portfolio->images;
            foreach ($images as $image ){

                Storage::delete($image);
            }
            $portfolio->images()->delete();

            $portfolio->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }
}
