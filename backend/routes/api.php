<?php

use App\Http\Controllers\Api\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Auth\SocialiteAuthController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories',[CategoryController::class,'index']);
Route::get('categories/{id}',[CategoryController::class,'show']);
Route::post('categories',[CategoryController::class,'store']);
Route::post('/categories/{category}',[CategoryController::class,'update']);
Route::delete('/categories/delete/{category}',[CategoryController::class,'destroy']);


// Auth Routes
Route::post('/register', [AuthController::class, 'register'])->middleware('token.guest');
Route::post('/login' ,[AuthController::class , 'login'] )->middleware('token.guest');
Route::get('/logout' , [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/test', function (Request $request) {
    return "hello";
});


// Google
Route::get('/auth/google/redirect', [SocialiteAuthController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google/callback', [SocialiteAuthController::class, 'handleGoogleCallback']);

// LinkedIn
Route::get('/auth/linkedin/redirect', [SocialiteAuthController::class, 'redirectToLinkedin'])->name('login.linkedin');
Route::get('/auth/linkedin/callback', [SocialiteAuthController::class, 'handleLinkedinCallback']);


// Test Client & freelancer middleware
Route::get('/testclient', function(){
    return "I'm a client";
})->middleware(['client','auth:sanctum']);

//skillController
Route::get('skills',[SkillController::class,'index']);
Route::post('skills',[SkillController::class,'store']);
Route::post('/skills/{skill}',[SkillController::class,'update']);
Route::delete('/skills/{skill}',[SkillController::class,'destroy']);

Route::get('jobs',[JobController::class,'index']);
Route::post('jobs',[JobController::class,'store']);
Route::post('/jobs/{job}',[JobController::class,'update']);
Route::delete('/jobs/{job}',[JobController::class,'destroy']);

