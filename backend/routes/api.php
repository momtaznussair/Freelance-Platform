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
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\FreelancerController;
use App\Http\Controllers\Api\ExperienceLevelController;
use App\Http\Controllers\Api\ProposalController;
use App\Http\Controllers\Api\SkillController;

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6897d0e0b4aeb62af68a4b2fcca8f0efed9fa376

// CRUD for Jobs
Route::get('jobs',[JobController::class,'index']);
Route::get('jobs/{job}',[JobController::class,'show']);
Route::post('jobs' ,[JobController::class,'store']);
Route::post('jobs/{job}' ,[JobController::class,'update']);
Route::delete('jobs/delete/{job}' ,[JobController::class,'destroy']);

// CRUD for Proposal
Route::get('proposals',[ProposalController::class,'index']);
Route::get('proposals/{proposal}',[ProposalController::class,'show']);
Route::post('proposals' ,[ProposalController::class,'store']);
Route::post('proposals/{proposal}' ,[ProposalController::class,'update']);
Route::delete('proposals/delete/{proposal}' ,[ProposalController::class,'destroy']);

// company api

Route::get('companies', [CompanyController::class, 'index']);
Route::get('companies/{id}',[CompanyController::class,'show']);
Route::post('companies',[CompanyController::class,'store']);
Route::post('/companies/{company}',[CompanyController::class,'update']);
Route::delete('/companies/delete/{company}',[CompanyController::class,'destroy']);

// freelancer

Route::get('freelancers', [FreelancerController::class, 'index']);
Route::get('freelancers/{id}',[FreelancerController::class,'show']);
Route::post('freelancers',[FreelancerController::class,'store']);
Route::post('/freelancers/{freelancer}',[FreelancerController::class,'update']);
Route::delete('/freelancers/delete/{freelancer}',[FreelancerController::class,'destroy']);

// CRUD for experience_levels
Route::get('experience_levels',[ExperienceLevelController::class,'index']);
Route::get('experience_levels/{level}',[ExperienceLevelController::class,'show']);
Route::post('experience_levels',[ExperienceLevelController::class,'store']);
Route::post('/experience_levels/{level}',[ExperienceLevelController::class,'update']);
Route::delete('/experience_levels/delete/{level}',[ExperienceLevelController::class,'destroy']);


// CRUD for skills
Route::get('skills',[SkillController::class,'index']);
Route::get('skills/{skill}',[SkillController::class,'show']);
Route::post('skills',[SkillController::class,'store']);
Route::post('/skills/{skill}',[SkillController::class,'update']);
Route::delete('/skills/delete/{skill}',[SkillController::class,'destroy']);
<<<<<<< HEAD
=======
>>>>>>> cb84c5474033ef42f7bb23c395ed721e6cb86837
=======
>>>>>>> 6897d0e0b4aeb62af68a4b2fcca8f0efed9fa376
