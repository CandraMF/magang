<?php

namespace App\Http\Controllers;

use App\Models\RecruitmentSchedule;
use Illuminate\Http\Request;

class RecruitmentScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $recruitmentSchedule = new RecruitmentSchedule();
            $recruitmentSchedule->recruitment_id = $request->formData['ruleForm']['recruitment_id'];
            $recruitmentSchedule->action_id = $request->formData['ruleForm']['action_id'];
            $recruitmentSchedule->action = $request->formData['ruleForm']['action'];
            $recruitmentSchedule->start_date = $request->formData['ruleForm']['start_date'];
            $recruitmentSchedule->save();

            $success = true;
            $message = 'Berhasil Membuat Jadwal Rekrutmen';

        } catch (\Illuminate\Database\QueryException $ex) {

            $recruitmentSchedule = null;
            $success = false;
            $message = 'Gagal Membuat Jadwal Rekrutmen';
        }

        $response = [
            'recruitment' => $recruitmentSchedule,
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $recruitmentSchedule = RecruitmentSchedule::find($id);

            $recruitmentSchedule->update([
                'action_id' => $request->formData['ruleForm']['action_id'],
                'action' => $request->formData['ruleForm']['action'],
                'start_date' => $request->formData['ruleForm']['start_date'],
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Jadwal Rekrutmen';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $recruitmentSchedule = null;
            $success = false;
            $message = 'Gagal Mengubah Jadwal Rekrutmen';
        }

        $response = [
            'recruitmentSchedule' => $recruitmentSchedule,
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(\App\Models\RecruitmentSchedule::find($id)->delete()) {
            $success = true;
            $message = "Berhasil";
        } else {
            $success = false;
            $message = "Gagal";
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
}
