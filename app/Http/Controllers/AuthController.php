<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function social($provider) {
        try {
            $access_token = Socialite::driver($provider)->stateless()->getAccessTokenResponse(request()->code);
            Session::put('access_token', $access_token['access_token']);
        } catch(RequestException $e) {
            if (Session::has('access_token')) {
                $auth = Socialite::driver($provider)->userFromToken(Session::get('access_token'));
                $user = User::where('email', $auth->getEmail());
                // ....
                // If $user existed => conduct to update
                // Else create a new account.
            }
        }
    }

}
