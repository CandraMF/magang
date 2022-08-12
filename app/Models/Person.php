<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $table = 'magang.person_tm';
    protected $primaryKey = 'person_id';
    public $timestamps = false;

    protected $fillable = [
        'person_id',
        'title_pre',
        'name',
        'title_post',
        'identity_id',
        'tax_id',
        'driving_a',
        'driving_b',
        'driving_c',
        'birth_place',
        'birth_date',
        'religion_id',
        'blood_type',
        'marital_status_id',
        'ethnicity_id',
        'email',
        'mobile',
        'mobile_alt',
        'address',
        'region_id',
        'zip',
        'address_home',
        'region_id_home',
        'zip_home'
    ];
}
