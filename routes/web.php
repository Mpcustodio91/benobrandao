<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\CompanieController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LetterOfAttorneyController;
use App\Http\Controllers\PDFController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/',[DashboardController::class,'index'])->name('welcome');
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::resource('clients',ClientController::class);
Route::post('/clients/validation',[ClientController::class,'validation']);
Route::post('/clients/bank-save/{id}',[ClientController::class,'addBank']);
Route::post('/clients/crypto-save/{id}',[ClientController::class,'addCrypto']);
Route::resource('contracts',ContractController::class)->middleware(['auth:sanctum','verified']);
Route::resource('companies',CompanieController::class)->middleware(['auth:sanctum','verified']);
Route::resource('letter-of-attorneys',LetterOfAttorneyController::class)->middleware(['auth:sanctum','verified']);

Route::get('/pdf/letter-of-attorney/{id}/{pdf}',[PDFController::class,'letterOfAttorney']);
Route::get('/pdf/contract/{id}/{pdf}/{download}',[PDFController::class,'contract']);