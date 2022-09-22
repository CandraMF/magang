<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    use HasFactory;

    protected $table = 'magang.major_tr';

    protected $primaryKey = 'major_id';
    public $timestamps = false;

    protected $fillable = [
        'name',
    ];
}
