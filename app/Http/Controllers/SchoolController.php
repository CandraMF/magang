<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('perPage');

        $position = \App\Models\School::orderBy('school_id', 'desc')->paginate($pageSize);

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

            $position = new School();
            $position->name = $request->formData['ruleForm']['name'];
            $position->save();

            $success = true;
            $message = 'Berhasil Membuat Sekolah/Univeritas';

        } catch (\Illuminate\Database\QueryException $ex) {

            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Membuat Sekolah/Univeritas';

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
            $position = School::find($id);

            $position->update([
                'name' => $request->formData['ruleForm']['name'],
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Sekolah/Univeritas';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Mengubah Sekolah/Univeritas';
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
        $data = School::where('name', 'ilike', '%'.$payload.'%')
            ->get()
            ->map(function($q) {
                return [
                    'name' => $q->name,
                    'school_id' => $q->school_id
                ];
            });

        return response()->json($data);
    }
}
