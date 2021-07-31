<?php

use App\Http\Controllers\Api\PostController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories',[PostController::class,'index']);
Route::post('categories',[PostController::class,'store']);
Route::post('/categories/{category}',[PostController::class,'update']);
Route::delete('/categories/{category}',[PostController::class,'destroy']);


// Auth Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login' ,[AuthController::class , 'login'] );


// Google 
Route::get('/auth/google/redirect', [SocialiteAuthController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google/callback', [SocialiteAuthController::class, 'handleGoogleCallback']);

// LinkedIn
Route::get('/auth/linkedin/redirect', [SocialiteAuthController::class, 'redirectToLinkedin'])->name('login.linkedin');
Route::get('/auth/linkedin/callback', [SocialiteAuthController::class, 'handleLinkedinCallback']);


