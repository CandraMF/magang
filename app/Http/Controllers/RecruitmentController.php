<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Position;
use App\Models\Recruitment;
use Illuminate\Http\Request;

class RecruitmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('perPage');
        $status = $request->query('status');

        $recruitment = \App\Models\Recruitment::with(['user'])
            ->when($status != "All", function($q)use($status) {
                $q->whereStatusId($status);
            })
            ->orderBy('open_date')
            ->paginate($pageSize);

        $success = true;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'recruitment' => $recruitment,
        ];

        return response()->json($response);
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

            $recruitment = new Recruitment();
            $recruitment->open_date = $request->formData['ruleForm']['open_date'];
            $recruitment->close_date = $request->formData['ruleForm']['close_date'];
            $recruitment->position_id = $request->formData['ruleForm']['position_id'];
            $recruitment->position = $request->formData['ruleForm']['position'];
            $recruitment->department_id = $request->formData['ruleForm']['department_id'];
            $recruitment->department = $request->formData['ruleForm']['department'];
            $recruitment->letter = $request->formData['ruleForm']['letter'];
            $recruitment->letter_date = $request->formData['ruleForm']['letter_date'];
            $recruitment->user_id = $request->formData['ruleForm']['user_id'];
            $recruitment->create_date = NOW();

            $recruitment->save();

            $success = true;
            $message = 'Berhasil Membuat Rekrutmen';

        } catch (\Illuminate\Database\QueryException $ex) {

            $recruitment = null;
            $id = null;
            $success = false;
            $message = 'Gagal Membuat Rekrutmen';

        }

        $response = [
            'recruitment' => $recruitment,
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
        $recruitment = Recruitment::with(['schedule' => function($q){
            $q->orderBy('start_date');
        }])->find($id);

        $response = [
            'recruitment' => $recruitment,
            'success' => true,
            'message' => 'berhasil',
        ];

        return response()->json($response);
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
            $recruitment = Recruitment::find($id);

            $recruitment->update([
                'open_date' => $request->formData['ruleForm']['open_date'],
                'close_date' => $request->formData['ruleForm']['close_date'],
                'position_id' => $request->formData['ruleForm']['position_id'],
                'position' => $request->formData['ruleForm']['position'],
                'department_id' => $request->formData['ruleForm']['department_id'],
                'department' => $request->formData['ruleForm']['department'],
                'letter' => $request->formData['ruleForm']['letter'],
                'letter_date' => $request->formData['ruleForm']['letter_date'],
                'update_date' => NOW(),
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Rekrutmen';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $recruitment = null;
            $success = false;
            $message = 'Gagal Mengubah Rekrutmen';
        }

        $response = [
            'recruitment' => $recruitment,
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
        //
    }

    public function changeStatus(Request $request, $id)
    {
        try {
            $recruitment = Recruitment::find($id);

            $recruitment->update([
                'status_id' => $request->status_id,
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Status ';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Mengubah Status';
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);
    }
}
