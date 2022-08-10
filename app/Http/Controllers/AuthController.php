<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use \App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Session\Session;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {

            $user = new User();
            $user->login = $request->login;
            $user->password = Hash::make($request->password);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->mobile = $request->mobile;
            $user->role_id = 'ROL001';
            $user->status_id = 'USR002';
            $user->create_date = NOW();
            $user->save();

            $credentials = [
                'login' => $request->login,
                'password' => $request->password,
            ];

            if (Auth::attempt($credentials)) {
                $success = true;
                $message = 'Berhasil Membuat Akun';
                $userInfo = Auth::user()->activation_date;
                $userId = Auth::user()->id;
                $token = Auth::user()->createToken('ApiToken')->plainTextToken;
            }

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;

            if($errorCode == '7'){
                $message = "NIK Telah Terdaftar, Silahkan Login";
            } else {
                $message = $ex->errorInfo;
            }
        }

        $response = [
            'success' => $success,
            'message' => $message,
            'token'     => $token,
            'userInfo'=> $userInfo,
            'userId'=> $userId,
        ];

        return response()->json($response);
    }

    /**
     * Login
     */
    public function login(Request $request)
    {
        $credentials = [
            'login' => $request->login,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials)) {
            $success = true;
            $message = 'Berhasil Login';
            $user = Auth::user();
            $token = Auth::user()->createToken('ApiToken')->plainTextToken;
        } else {
            $success = false;
            $message = 'Login Gagal';
            $user = null;
            $token = null;
        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
            'user'    => $user,
            'token'   => $token,
        ];

        return response()->json($response);
    }

    /**
     * Logout
     */
    public function logout()
    {
        auth()->logout();
        return response()->json([
            'success'    => true
        ], 200);
    }
}
