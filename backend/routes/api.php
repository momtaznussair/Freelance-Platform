<?php

use App\Http\Controllers\Api\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Auth\SocialiteAuthController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LanguageLevelController;
use App\Http\Controllers\Api\PortfolioController;

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
// CRUD for Category
Route::get('categories',[CategoryController::class,'index']);
Route::get('categories/{category}',[CategoryController::class,'show']);
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

Route::get('/testfreelancer', function(){
    return "I'm a freelancer";
})->middleware(['freelancer','auth:sanctum']);


// CRUD for Language
Route::get('languages',[LanguageController::class,'index']);
Route::get('languages/{language}',[LanguageController::class,'show']);
Route::post('languages' ,[LanguageController::class,'store']);
Route::post('languages/{language}' ,[LanguageController::class,'update']);
Route::delete('languages/delete/{language}' ,[LanguageController::class,'destroy']);

// CRUD for Language Levels
Route::get('languageLevel',[LanguageLevelController::class,'index']);
Route::get('languageLevel/{languageLevel}',[LanguageLevelController::class,'show']);
Route::post('languageLevel' ,[LanguageLevelController::class,'store']);
Route::post('languageLevel/{languageLevel}' ,[LanguageLevelController::class,'update']);
Route::delete('languageLevel/delete/{languageLevel}' ,[LanguageLevelController::class,'destroy']);

// CRUD for Portfolio
Route::get('portfolios',[PortfolioController::class,'index']);
Route::get('portfolios/{portfolio}',[PortfolioController::class,'show']);
Route::post('portfolios' ,[PortfolioController::class,'store']);
Route::post('portfolios/{portfolio}' ,[PortfolioController::class,'update']);
Route::delete('portfolios/delete/{portfolio}' ,[PortfolioController::class,'destroy']);
