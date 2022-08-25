<?php

use App\Mail\ActivationCodeMail;
use App\Mail\ActivationMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

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


Route::get('/email', function() {
    Mail::to('candragain99@gmail.com')->send(new ActivationMail());
    return new ActivationMail();
});
// Route::get('{any}', function () {
//     return view('app');
// })->where('any', '.*');
