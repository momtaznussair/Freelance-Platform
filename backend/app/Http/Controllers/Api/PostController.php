<<<<<<< HEAD
=======
<?php
>>>>>>> cb84c5474033ef42f7bb23c395ed721e6cb86837

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $categories=Category::all();
<<<<<<< HEAD
        return $categories;
=======
        // return $categories;
        return response()->json([
            "data" => $categories
        ]);
>>>>>>> cb84c5474033ef42f7bb23c395ed721e6cb86837
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
<<<<<<< HEAD
    
=======

>>>>>>> cb84c5474033ef42f7bb23c395ed721e6cb86837
        return Category::destroy($id);
    }

    // public function search($name)
    // {
<<<<<<< HEAD
        
=======

>>>>>>> cb84c5474033ef42f7bb23c395ed721e6cb86837
    //     return Category::where('name','like','%'.$name.'%')->get();
    // }
}
