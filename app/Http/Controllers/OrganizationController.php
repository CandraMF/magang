<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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
            $organization = new Organization();

            $organization->person_id = $request->personId;
            $organization->organization = $request->formData['ruleForm']['organization'];
            $organization->position = $request->formData['ruleForm']['position'];
            $organization->description = $request->formData['ruleForm']['description'];
            $organization->start_period = $request->formData['ruleForm']['start_period'];
            $organization->end_period = $request->formData['ruleForm']['end_period'];
            $organization->create_date = NOW();

            $organization->save();

            $success = true;
            $message = 'Berhasil Menambakan Riwayat Organisasi';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Menambakan Riwayat Organisasi';
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
        $organization = \App\Models\Organization::wherePersonId($id)->get();

        $success = true;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'organization' => $organization,
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
            $organization = Organization::find($id);

            $organization->update([
                'organization' => $request->formData['ruleForm']['organization'],
                'position' => $request->formData['ruleForm']['position'],
                'description' => $request->formData['ruleForm']['description'],
                'start_period' => $request->formData['ruleForm']['start_period'],
                'end_period' => $request->formData['ruleForm']['end_period'],
                'update_date' => NOW(),
            ]);

            $success = true;
            $message = 'Berhasil Merubah Riwayat Organisasi';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Merubah Riwayat Organisasi';

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
        if(\App\Models\Organization::find($id)->delete()) {
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
