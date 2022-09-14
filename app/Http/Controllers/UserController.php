<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ActivationController;
use App\Mail\ActivationMail;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $pageSize = $request->query('perPage');

        $user = \App\Models\User::paginate($pageSize);

        $success = true;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'user' => $user,
        ];

        return response()->json($response);
    }

    public function destroy($id)
    {
        if(\App\Models\User::find($id)->delete()) {
            $success = true;
            $message = "Berhasil";
        } else {
            $success = false;
            $message = "Gagal";
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    public function activateUser(Request $request) {

        $userCode = $request->userCode;
        $code = $request->code;
        $userId = $request->userId;

        if(app(ActivationController::class)->checkCode($userCode, $code)) {

            try {
                $user = User::find($userId);
                $user->update([
                    'status_id' => 'USR101',
                    'activation_date' => NOW()
                ]);

                $response = [
                    'success' => true,
                    'user' => $user,
                    'message' => 'Berhasil, Mohon Isi Data Diri'
                ];

            } catch(\Illuminate\Database\QueryException $ex) {
                $response = [
                    'success' => true,
                    'message' => 'Berhasil, Mohon Isi Data Diri'
                ];
            }

        } else {
            $response = [
                'success' => false,
                'message' => 'Gagal, Kode Tidak Sesuai, Mohon Ulangi Proses Aktivasi'
            ];
        }

        return response()->json($response);
    }

    public function sendActivationCode(Request $request) {
        $email = $request->email;
        $mobile = $request->mobile;

        $code = app(ActivationController::class)->getActivationCode();

        if ($request->platform == "whatsapp") {
            Http::withHeaders([
                'api_key' => '36w2kh7van3eb7yg9j8hh2u6'
            ])->post('http://mashery.bpkh.go.id/v1/whatsapp/send/notification', [
                "recipientNumber" => $mobile,
                "appName" => "MAGANG",
                "about" => "Permohonan Kode Aktivasi",
                "description" => "Kode Aktifasi Akun mu adalah *" . $code . "*"
            ]);

            $response = [
                'success' => true,
                'code' => Hash::make($code),
                'code_1' => $code,
                'message' => 'Kode Aktifasi Terkirim ke Nomor Whatsapp' . $mobile . ' , Mohon Segera Periksa'
            ];

        } else if ($request->platform = "email") {

            Mail::to($email)->send(new ActivationMail($code));

            if(Mail::failures()) {
                $response = [
                    'success' => false,
                    'code' => '',
                    'message' => 'Mohon Maaf, Tolong Coba Lagi Nanti'
                ];
            } else {
                $response = [
                    'success' => true,
                    'code' => Hash::make($code),
                    'message' => 'Email Terkirim ke Alamat ' . $email . ' , Mohon Segera Periksa'
                ];
            }
        } else {
            $response = [
                'success' => false,
                'code' => '',
                'message' => 'Mohon Maaf, Tolong Coba Lagi Nanti'
            ];
        }

        return response()->json($response);
    }

    public function store(Request $request) {
        try {

            $user = new User();
            $user->login = $request->login;
            $user->password = Hash::make($request->password);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->mobile = $request->mobile;
            $user->create_date = NOW();
            $user->save();

            $success = true;
            $message = 'Berhasil Membuat Akun';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Membuat Akun';
            $token = null;

            if($errorCode == '7'){
                $message = "NIK/Username Telah Terdaftar, Silahkan Ganti";
            } else {
                $message = $ex->errorInfo;
            }
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    public function update(Request $request, $id)
    {

        try {
            $user = User::find($id);

            $user->update([
                'login' => $request->login,
                'name' => $request->name,
                'email' => $request->email,
                'mobile' => $request->mobile,
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah User';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Mengubah Akun';

            if($errorCode == '7'){
                $message = "NIK/Username Telah Terdaftar, Silahkan Ganti";
            } else {
                $message = $ex->errorInfo;
            }
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
}
