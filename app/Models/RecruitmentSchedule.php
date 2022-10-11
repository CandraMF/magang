<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecruitmentSchedule extends Model
{
    use HasFactory;

    protected $table = 'magang.recruitment_schedule_tx';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'recruitment_id',
        'action_id',
        'action',
        'start_date',
        'end_date',
        'status_id',
    ];

    public function recruitment()
    {
        return $this->belongsTo(\App\Models\Recruitment::class, 'recruitment_id', 'recruitment_id');
    }
}
