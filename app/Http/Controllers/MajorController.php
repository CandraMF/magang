<?php

namespace App\Http\Controllers;

use App\Models\Major;
use Illuminate\Http\Request;

class MajorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('perPage');

        $data = \App\Models\Major::orderBy('major_id', 'desc')->paginate($pageSize);

        $success = true;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'data' => $data,
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

            $major = new Major();
            $major->name = $request->formData['ruleForm']['name'];
            $major->save();

            $success = true;
            $message = 'Berhasil Membuat Jurusan';

        } catch (\Illuminate\Database\QueryException $ex) {

            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Membuat Jurusan';

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
            $major = Major::find($id);

            $major->update([
                'name' => $request->formData['ruleForm']['name'],
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Jurusan';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Mengubah Jurusan';
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
        //
    }

    public function search($payload)
    {
        $data = Major::where('name', 'ilike', '%'.$payload.'%')
            ->get()
            ->map(function($q) {
                return [
                    'name' => $q->name,
                    'major_id' => $q->major_id
                ];
            });

        return response()->json($data);
    }
}
