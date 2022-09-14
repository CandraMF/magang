<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $table = 'magang.person_work_tx';
    public $timestamps = false;

    protected $fillable = [
        'company',
        'position',
        'description',
        'start_period',
        'end_period',
        'create_date',
        'update_date',
    ];

    use HasFactory;
}
