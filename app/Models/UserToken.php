<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\PersonalAccessToken;

class UserToken extends PersonalAccessToken
{
    protected $connection = 'pgsql';
    protected $table = 'public.user_token_tx';
}
