<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    use HasFactory;

    protected $table = 'magang.person_family_tx';

    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'person_id',
        'family_type',
        'name',
        'birth_place',
        'birth_date',
        'mobile',
    ];
}
