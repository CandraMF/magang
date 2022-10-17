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
            $user->create_date = NOW();
            $user->save();

            $credentials = [
                'login' => $request->login,
                'password' => $request->password,
            ];

            if (Auth::attempt($credentials)) {
                $success = true;
                $message = 'Berhasil Membuat Akun';
                $token = Auth::user()->createToken('ApiToken')->plainTextToken;
            }

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Membuat Akun';
            $token = null;

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
        ];

        return response()->json($response);
    }

    /**
     * Login
     */
    public function login(Request $request)
    {
        $user = User::whereLogin($request->login)->first();

        $credentials = [
            'login' => $request->login,
            'password' => $request->password,
        ];

        if (!empty($user)) {
            if($user->role_id == 'ROL001') {
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
            } else {
                $ldap = new LDAPController();
                $LdapResponse = $ldap->login($request);

                $success = $LdapResponse['success'];
                $message = $LdapResponse['message'];
                $user = $LdapResponse['user'];
                $token = $LdapResponse['token'];
            }
        } else {
            $success = false;
            $message = 'Akun Tidak Ditemukan';
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
            'success' => true
        ], 200);
    }
}
