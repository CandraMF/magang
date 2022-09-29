<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\User;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('perPage');

        $position = \App\Models\Person::orderBy('person_id', 'desc')->paginate($pageSize);

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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

            $person = \App\Models\Person::create([
                'title_pre' => $request->formData['ruleForm']['title_pre'],
                'name' => $request->formData['ruleForm']['name'],
                'title_post' => $request->formData['ruleForm']['title_post'],
                'identity_id' => $request->formData['ruleForm']['identity_id'],
                'tax_id' => $request->formData['ruleForm']['tax_id'],
                'driving_a' => $request->formData['ruleForm']['driving_a'],
                'driving_b' => $request->formData['ruleForm']['driving_b'],
                'driving_c' => $request->formData['ruleForm']['driving_c'],
                'birth_place' => $request->formData['ruleForm']['birth_place'],
                'birth_date' => $request->formData['ruleForm']['birth_date'],
                'religion_id' => $request->formData['ruleForm']['religion_id'],
                'blood_type' => $request->formData['ruleForm']['blood_type'],
                'marital_status_id' => $request->formData['ruleForm']['marital_status_id'],
                'ethnicity_id' => $request->formData['ruleForm']['ethnicity_id'],
                'email' => $request->formData['ruleForm']['email'],
                'mobile' => $request->formData['ruleForm']['mobile'],
                'mobile_alt' => $request->formData['ruleForm']['mobile_alt'],
                'address' => $request->formData['ruleForm']['address'],
                'region_id' => $request->formData['ruleForm']['region_id'],
                'region' => $request->formData['ruleForm']['region'],
                'zip' => $request->formData['ruleForm']['zip'],
                'address_home' => $request->formData['ruleForm']['address_home'],
                'region_id_home' => $request->formData['ruleForm']['region_id_home'],
                'region_home' => $request->formData['ruleForm']['region_home'],
                'zip_home' => $request->formData['ruleForm']['zip_home'],
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
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $person = Person::find($id);

        return response()->json($person);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $person = Person::find($id);

            $person->update([
                'title_pre' => $request->formData['ruleForm']['title_pre'],
                'name' => $request->formData['ruleForm']['name'],
                'title_post' => $request->formData['ruleForm']['title_post'],
                'identity_id' => $request->formData['ruleForm']['identity_id'],
                'tax_id' => $request->formData['ruleForm']['tax_id'],
                'driving_a' => $request->formData['ruleForm']['driving_a'],
                'driving_b' => $request->formData['ruleForm']['driving_b'],
                'driving_c' => $request->formData['ruleForm']['driving_c'],
                'birth_place' => $request->formData['ruleForm']['birth_place'],
                'birth_date' => $request->formData['ruleForm']['birth_date'],
                'religion_id' => $request->formData['ruleForm']['religion_id'],
                'blood_type' => $request->formData['ruleForm']['blood_type'],
                'marital_status_id' => $request->formData['ruleForm']['marital_status_id'],
                'ethnicity_id' => $request->formData['ruleForm']['ethnicity_id'],
                'email' => $request->formData['ruleForm']['email'],
                'mobile' => $request->formData['ruleForm']['mobile'],
                'mobile_alt' => $request->formData['ruleForm']['mobile_alt'],
                'address' => $request->formData['ruleForm']['address'],
                'region_id' => $request->formData['ruleForm']['region_id'],
                'region' => $request->formData['ruleForm']['region'],
                'zip' => $request->formData['ruleForm']['zip'],
                'address_home' => $request->formData['ruleForm']['address_home'],
                'region_id_home' => $request->formData['ruleForm']['region_id_home'],
                'region_home' => $request->formData['ruleForm']['region_home'],
                'zip_home' => $request->formData['ruleForm']['zip_home'],
            ]);

            $errorCode = null;
            $success = true;
            $message = 'Berhasil Mengubah Person';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $message = 'Gagal Mengubah Person';
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
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(\App\Models\Person::find($id)->delete()) {
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
