<?php

namespace App\Http\Controllers;

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
        //
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
        //
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
