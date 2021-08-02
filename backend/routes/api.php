<?php

use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\SkillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories',[PostController::class,'index']);
Route::post('categories',[PostController::class,'store']);
Route::post('/categories/{category}',[PostController::class,'update']);
Route::delete('/categories/{category}',[PostController::class,'destroy']);

//skillController
Route::get('skills',[SkillController::class,'index']);
Route::post('skills',[SkillController::class,'store']);
Route::post('/skills/{skill}',[SkillController::class,'update']);
Route::delete('/skills/{skill}',[SkillController::class,'destroy']);

Route::get('jobs',[JobController::class,'index']);
Route::post('jobs',[JobController::class,'store']);
Route::post('/jobs/{job}',[JobController::class,'update']);
Route::delete('/jobs/{job}',[JobController::class,'destroy']);

