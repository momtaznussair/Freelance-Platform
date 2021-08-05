<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(){
        $skills=Skill::all();
        return $skills;
    }
    public function store(Request $request){
       $skills=Skill::create([

            'name'=>$request->name ,
            'category'=>$request->category,
            'category_id'=>$request->category_id
            
        ]);

        return $skills;
    }

    public function update(Request $request, $id)
    {

    $skills=Skill::find($id);
    $skills->update($request->all());
        return $skills;

}
public function destroy($id)
    {
    
        return Skill::destroy($id);
    }
}
