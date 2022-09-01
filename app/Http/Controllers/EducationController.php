<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EducationController extends Controller
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
        try{

            $person = \App\Models\Education::create([
                'person_id'           => $request->personId,
                'education_type'      => $request->formData['ruleForm']['education_type'],
                'start_year'          => $request->formData['ruleForm']['start_year'],
                'end_year'            => $request->formData['ruleForm']['end_year'],
                'major_id'            => $request->formData['ruleForm']['major_id'],
                'major'               => $request->formData['ruleForm']['major'],
                'school_id'           => $request->formData['ruleForm']['school_id'],
                'school'              => $request->formData['ruleForm']['school'],
                'region_id'           => $request->formData['ruleForm']['region_id'],
                'region'              => $request->formData['ruleForm']['region'],
                'score'               => $request->formData['ruleForm']['score'],
                'status_id'           => $request->formData['ruleForm']['status_id'],
            ]);

            $success = true;
            $message = 'Berhasil';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = $ex->getMessage();
            // $message = 'Gagal';
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
}
