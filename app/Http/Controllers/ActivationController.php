<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ActivationController extends Controller
{
    public function getActivationCode() {
        $code = random_int(1000, 9999);
        return $code;
    }

    public function checkCode($userInputCode, $code) {

        if (Hash::check($userInputCode, $code)) {
            return true;
        } else {
            return false;
        }
    }
}
