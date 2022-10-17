<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LDAPController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {

        $login = $request->login;
        $password = $request->password;

        // LDAP Start
        $login = str_replace("@bpkh.go.id", "", $login);
        $host = "10.10.60.18";

        try {
            if(!$ldap = ldap_connect($host)){
                $response = [
                    'success'   => false,
                    'message'   => "Proses gagal, koneksi ke Server LDAP gagal",
                    'token'     => null,
                    'user'      => null,
                ];
                return $response;
            }else{
                ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
                ldap_set_option($ldap, LDAP_OPT_NETWORK_TIMEOUT, 10);
                if(ldap_bind($ldap, "UID=$login,OU=people,DC=bpkh,DC=go,DC=id", $password)){

                    $credentials = [
                        'login' => $login,
                        'password' => $password,
                    ];

                    if (Auth::attempt($credentials)) {
                        $user = Auth::user();
                        $token = $user->createToken('ApiToken')->plainTextToken;
                    } else {
                        $user = null;
                        $token = null;
                    }

                    $response = [
                        'success'   => true,
                        'message'   => "Proses berhasil",
                        'token'     => $token,
                        'user'      => $user,
                    ];

                    return $response;
                } else {
                    $response = [
                        'success'   => false,
                        'message'   => "Proses gagal, User ID dan/atau Password yang Anda masukkan tidak sesuai",
                        'token'     => null,
                        'user'      => null,
                    ];
                    return $response;
                }
            }
        } catch (Exception $ex) {
            $response = [
                'success'   => false,
                'message'   => "Proses gagal, User ID dan/atau Password yang Anda masukkan tidak sesuai",
                'token'     => null,
                'user'      => null,
            ];
            return $response;
        }

    }
}
