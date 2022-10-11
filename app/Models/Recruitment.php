<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    use HasFactory;

    protected $table = 'magang.recruitment_tx';
    protected $primaryKey = 'recruitment_id';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'open_date',
        'close_date',
        'position_id',
        'position',
        'department_id',
        'department',
        'letter',
        'letter_date',
        'status_id',
        'user_id',
        'create_date',
        'update_date',
    ];

    public function position() {
        return $this->belongsTo(\App\Models\Position::class, 'position_id', 'position_id');
    }

    public function status() {
        return $this->belongsTo(\App\Models\Status::class, 'status_id', 'status_id');
    }

    public function department() {
        return $this->belongsTo(\App\Models\Department::class, 'department_id', 'department_id');
    }

    public function user() {
        return $this->belongsTo(\App\Models\User::class, 'user_id', 'user_id');
    }

    public function schedule() {
        return $this->hasMany(\App\Models\RecruitmentSchedule::class, 'recruitment_id', 'recruitment_id');
    }
}
