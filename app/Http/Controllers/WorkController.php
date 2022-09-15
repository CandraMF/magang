<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Illuminate\Http\Request;

class WorkController extends Controller
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
    public function store(Request $request) {
        try {
            $work = new Work();

            $work->person_id = $request->personId;
            $work->company = $request->formData['ruleForm']['company'];
            $work->position = $request->formData['ruleForm']['position'];
            $work->description = $request->formData['ruleForm']['description'];
            $work->start_period = $request->formData['ruleForm']['start_period'];
            $work->end_period = $request->formData['ruleForm']['end_period'];
            $work->create_date = NOW();

            $work->save();

            $success = true;
            $message = 'Berhasil Menambakan Riwayat Pendidikan';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Menambakan Riwayat Pendidikan';
            $message = $message = $ex->errorInfo;
        }

        $response = [
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
        $work = \App\Models\Work::wherePersonId($id)->get();

        $success = true;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'work' => $work,
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
            $work = Work::find($id);

            $work->update([
                'company' => $request->formData['ruleForm']['company'],
                'position' => $request->formData['ruleForm']['position'],
                'description' => $request->formData['ruleForm']['description'],
                'start_period' => $request->formData['ruleForm']['start_period'],
                'end_period' => $request->formData['ruleForm']['end_period'],
                'update_date' => NOW(),
            ]);

            $success = true;
            $message = 'Berhasil Merubah Riwayat Pendidikan';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Merubah Riwayat Pendidikan';

        }

        $response = [
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
        if(\App\Models\Work::find($id)->delete()) {
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
