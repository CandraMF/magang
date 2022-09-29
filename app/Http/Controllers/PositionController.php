<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('perPage');

        if($pageSize) {
            $position = \App\Models\Position::orderBy('position_id', 'desc')->paginate($pageSize);
        } else {
            $position = \App\Models\Position::whereStatusId('POS101')->get();
        }


        $success = true;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'position' => $position,
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

            $position = new Position();
            $position->name = $request->formData['ruleForm']['name'];
            $position->status_id = $request->formData['ruleForm']['status_id'];
            $position->save();

            $success = true;
            $message = 'Berhasil Membuat Posisi / Jabatan';

        } catch (\Illuminate\Database\QueryException $ex) {

            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Membuat Posisi / Jabatan';

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
            $position = Position::find($id);

            $position->update([
                'name' => $request->formData['ruleForm']['name'],
                'status_id' => $request->formData['ruleForm']['status_id'],
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Posisi / Jabatan';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Mengubah Posisi / Jabatan';
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
        if(\App\Models\Position::find($id)->delete()) {
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

    public function changeStatus(Request $request, $id)
    {
        try {
            $position = Position::find($id);
            $status = $position->status_id == 'POS101' ? 'POS001' : 'POS101';

            $position->update([
                'status_id' => $status,
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
