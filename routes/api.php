<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('person', App\Http\Controllers\PersonController::class);
Route::resource('status', App\Http\Controllers\StatusController::class);
Route::get('status/getByType/{type}', [App\Http\Controllers\StatusController::class, 'getByType'])->name('status.getByType');

Route::post('social/{provider}', [App\Http\Controllers\AuthController::class, 'social']);

