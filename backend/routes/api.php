<?php

use App\Http\Controllers\Api\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Auth\SocialiteAuthController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LanguageLevelController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\APi\DurationController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\FreelancerController;
use App\Http\Controllers\Api\ExperienceLevelController;
use App\Http\Controllers\Api\PaymentStyleController;
use App\Http\Controllers\Api\PaymentTypeController;
use App\Http\Controllers\Api\portfolioImagesController;
use App\Http\Controllers\Api\ProposalController;
use App\Http\Controllers\Api\SkillController;
use App\Models\Education;
use App\Http\Controllers\Api\EmailVerificationController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\UserLanguagesController;


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

Route::middleware(['auth:sanctum' ,'verified'])->get('/user', function (Request $request) {
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



// Google
Route::get('/auth/google/redirect', [SocialiteAuthController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google/callback', [SocialiteAuthController::class, 'handleGoogleCallback']);

// LinkedIn
Route::get('/auth/linkedin/redirect', [SocialiteAuthController::class, 'redirectToLinkedin'])->name('login.linkedin');
Route::get('/auth/linkedin/callback', [SocialiteAuthController::class, 'handleLinkedinCallback']);

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


// CRUD for Jobs/
Route::get('jobs',[JobController::class,'index']);
Route::get('jobs/{job}',[JobController::class,'show']);


// CRUD for Proposal
Route::get('proposals',[ProposalController::class,'index']);
Route::get('proposals/{proposal}',[ProposalController::class,'show']);

// CRUD for Durations
Route::get('durations',[DurationController::class,'index']);
Route::get('durations/{durations}',[DurationController::class,'show']);
Route::post('durations' ,[DurationController::class,'store']);
Route::post('durations/{durations}' ,[DurationController::class,'update']);
Route::delete('durations/delete/{durations}' ,[DurationController::class,'destroy']);

// CRUD for Payment Type
Route::get('payment_types',[PaymentTypeController::class,'index']);
Route::get('payment_types/{payment_type}',[PaymentTypeController::class,'show']);
Route::post('payment_types' ,[PaymentTypeController::class,'store']);
Route::post('payment_types/{payment_type}' ,[PaymentTypeController::class,'update']);
Route::delete('payment_types/delete/{payment_type}' ,[PaymentTypeController::class,'destroy']);

// CRUD for Payment styles
Route::get('payment_styles',[PaymentStyleController::class,'index']);
Route::get('payment_styles/{payment_style}',[PaymentStyleController::class,'show']);
Route::post('payment_styles' ,[PaymentStyleController::class,'store']);
Route::post('payment_styles/{payment_style}' ,[PaymentStyleController::class,'update']);
Route::delete('payment_styles/delete/{payment_style}' ,[PaymentStyleController::class,'destroy']);

// company api
Route::get('companies', [CompanyController::class, 'index']);
Route::get('companies/{id}',[CompanyController::class,'show']);


// freelancer
Route::get('freelancers', [FreelancerController::class, 'index']);
Route::get('freelancers/{id}',[FreelancerController::class,'show']);
Route::post('freelancers',[FreelancerController::class,'store']);

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

// CRUD for Clients
Route::get('clients',[ClientController::class,'index']);
Route::get('clients/{client}',[ClientController::class,'show']);
Route::post('clients',[ClientController::class,'store']);


// CRUD for Educations
Route::get('educations',[EducationController::class,'index']);
Route::get('educations/{education}',[EducationController::class,'show']);



// authenticated client routes
Route::post('jobs' ,[JobController::class,'store']);
Route::post('educations',[EducationController::class,'store']);


Route::middleware(['client','auth:sanctum'])->group(function () {
    // clients
    Route::post('/clients/{client}',[ClientController::class,'update']);
    Route::delete('/clients/delete/{client}',[ClientController::class,'destroy']);

    // jobs
    Route::post('jobs/{job}' ,[JobController::class,'update']);
    Route::delete('jobs/delete/{job}' ,[JobController::class,'destroy']);

    // companies

    Route::post('companies',[CompanyController::class,'store']);
    Route::post('/companies/{company}',[CompanyController::class,'update']);
    Route::delete('/companies/delete/{company}',[CompanyController::class,'destroy']);

});

// authenticated freelancer routes


Route::middleware(['freelancer','auth:sanctum'])->group(function () {
    // portfolios
    Route::post('portfolios/{portfolio}' ,[PortfolioController::class,'update']);
    Route::delete('portfolios/delete/{portfolio}' ,[PortfolioController::class,'destroy']);

    // portfolios images
    Route::post('portfolios' ,[PortfolioController::class,'store']);
    Route::delete('portfolios/images/{id}', [portfolioImagesController::class, 'destroy']);
    Route::post('portfolios/images', [portfolioImagesController::class, 'store']);

    //proposals
    Route::post('proposals' ,[ProposalController::class,'store']);
    Route::post('proposals/{proposal}' ,[ProposalController::class,'update']);
    Route::delete('proposals/delete/{proposal}' ,[ProposalController::class,'destroy']);

    // freelancer
    Route::post('/freelancers/{freelancer}',[FreelancerController::class,'update']);
    Route::delete('/freelancers/delete/{freelancer}',[FreelancerController::class,'destroy']);

    //Education
    Route::post('/educations/{education}',[EducationController::class,'update']);
    Route::delete('/educations/delete/{education}',[EducationController::class,'destroy']);

});

// Verification Email
Route::post('email/verification-notification', [EmailVerificationController::class, 'sendVerificationEmail'])->middleware('auth:sanctum');
Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware('auth:sanctum');


Route::get('/notifications/{id}' ,[NotificationController::class,'allNotifications'])->name('allNotifications');
Route::get('/readNotifications/{id}' ,[NotificationController::class,'readNotifications'])->name('readNotifications');
Route::get('/unreadNotifications/{id}' ,[NotificationController::class,'unreadNotifications'])->name('unreadNotifications');
Route::post('/markAsRead/{id}/{notifyID}' ,[NotificationController::class,'markAsRead'])->name('markAsRead');


// CRUD for UserLanguages
Route::get('userLanguages',[UserLanguagesController::class,'index']);
Route::get('userLanguages/{userLanguage}',[UserLanguagesController::class,'show']);
Route::post('userLanguages',[UserLanguagesController::class,'store']);
Route::post('/userLanguages/{userLanguage}',[UserLanguagesController::class,'update']);
Route::delete('/userLanguages/delete/{userLanguage}',[UserLanguagesController::class,'destroy']);


Route::post('/register/socialite', [SocialiteAuthController::class, 'registerOrLoginUser'])->middleware('token.guest');

Route::post('/user/update/{id}' , [AuthController::class,'updateUserEmailAndUsername']);
Route::post('/user/updateLocation/{id}' , [AuthController::class,'updateUserPhoneAndLocation']);
Route::post('/user/updatePassword/{id}' , [AuthController::class,'updateUserPassword']);


Route::post('/user/checkEmail' ,[SocialiteAuthController::class ,'checkEmail']);
