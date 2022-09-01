<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table = 'magang.person_education_tx';

    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'person_id',
        'education_type',
        'start_year',
        'end_year',
        'major_id',
        'major',
        'school_id',
        'school',
        'region_id',
        'region',
        'score',
        'status_id',
        'is_last',
    ];

}
