<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $table = 'magang.person_organization_tx';
    public $timestamps = false;

    protected $fillable = [
        'person_id',
        'organization',
        'position',
        'description',
        'start_period',
        'end_period',
        'create_date',
        'update_date',

    ];

    use HasFactory;
}
