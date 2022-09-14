<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $table = 'magang.department_tr';

    public function head() {
        return $this->belongsTo(\App\Models\Department::class, 'head_id', 'department_id');
    }
}
