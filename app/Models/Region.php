<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $table = 'magang.region_tr';

    public function head() {
        return $this->belongsTo(\App\Models\Department::class)->where('LENGTH(region_id) = 6');
    }

    public function child() {
        return $this->hasMany(\App\Models\Department::class)->where('LENGTH(region_id) = 6');
    }

}
