<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::post('/login', [App\Http\Controllers\AuthController::class, 'login'])->name('login');
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register'])->name('logout');
Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('person', App\Http\Controllers\PersonController::class);
    Route::resource('status', App\Http\Controllers\StatusController::class);
    Route::resource('school', App\Http\Controllers\SchoolController::class);
    Route::resource('major', App\Http\Controllers\MajorController::class);

    Route::get('status/getByType/{type}', [App\Http\Controllers\StatusController::class, 'getByType'])->name('status.getByType');
    Route::get('region/search/{payload}', [App\Http\Controllers\RegionController::class, 'search'])->name('region.search');
    Route::get('school/search/{payload}', [App\Http\Controllers\SchoolController::class, 'search'])->name('school.search');
    Route::get('major/search/{payload}', [App\Http\Controllers\MajorController::class, 'search'])->name('major.search');

    // activation
    Route::post('sendActivationCode', [App\Http\Controllers\UserController::class, 'sendActivationCode'])->name('user.sendActivationCode');
    Route::post('activateUser', [App\Http\Controllers\UserController::class, 'activateUser'])->name('user.activateUser');
});






