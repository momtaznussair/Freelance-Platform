<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $categories=Category::all();
        return $categories;
    }
    public function store(Request $request){
       $category=Category::create([

            'name'=>$request->name
        ]);

        return $category;
    }

    public function update(Request $request, $id)
    {

    $category=Category::find($id);
    $category->update($request->all());
        return $category;

}
public function destroy($id)
    {
    
        return Category::destroy($id);
    }

    // public function search($name)
    // {
        
    //     return Category::where('name','like','%'.$name.'%')->get();
    // }
}
