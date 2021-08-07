<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    use ApiResponseTrait;

    public function index(){
        $categories=Category::all();
        return $this->apiResponse($categories);
    }

    public function show($id){
        $category = Category::find($id);

        if($category){
            return $this->apiResponse($category);
        }

        return $this->NotFoundError();
    }

    public function store(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:categories,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }
        $category=Category::create([
            'name' => $request->name
        ]);

        if($category){
            return $this->apiResponse($category);
        }
        return  $this->UnknownError();
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required|min:2|unique:categories,name'
        ]);

        if($validate->fails()){
            return  $this->apiResponse(null,$validate->errors(),422);
        }

        $category = Category::find($id);

        if(!$category){
            return $this->NotFoundError();
        }

        $category->update($request->all());
        if($category){
            return $this->apiResponse($category,'',201);
        }

        return  $this->UnknownError();
    }

    public function destroy($id)
    {
        $category = Category::find($id);

        if($category){
            $category->jobs()->delete();
            $category->freelancers()->delete();
            $category->delete();
            return $this->apiResponse(true,'',200);
        }

        return $this->NotFoundError();
    }

}
