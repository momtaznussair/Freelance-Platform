<<<<<<< HEAD
<<<<<<< HEAD
<?php
=======
>>>>>>> 90c3daf833b4b304e9baf3b1f8da3f56dcfe5b33
=======
<?php
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $categories=Category::all();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
        // return $categories;
        return response()->json([
            "data" => $categories
        ]);
<<<<<<< HEAD
=======
        return $categories;
>>>>>>> 90c3daf833b4b304e9baf3b1f8da3f56dcfe5b33
=======
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
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
<<<<<<< HEAD

=======
    
>>>>>>> 90c3daf833b4b304e9baf3b1f8da3f56dcfe5b33
=======

>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
        return Category::destroy($id);
    }

    // public function search($name)
    // {
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 90c3daf833b4b304e9baf3b1f8da3f56dcfe5b33
=======

>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
    //     return Category::where('name','like','%'.$name.'%')->get();
    // }
}
