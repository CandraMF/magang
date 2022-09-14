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
    public function index()
    {
        $person = \App\Models\Person::all();

        $success = false;
        $message = "Berhasil";

        $response = [
            'success' => $success,
            'message' => $message,
            'person' => $person,
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

            $person = \App\Models\Person::create(
                [
                // 'person_id'         => $request->formData['ruleForm']['person_id'],
                'identity_id'       => $request->formData['ruleForm']['nomorKTP'],
                'title_pre'         => $request->formData['ruleForm']['gelarAwal'],
                'name'              => $request->formData['ruleForm']['name'],
                'title_post'        => $request->formData['ruleForm']['gelarAkhir'],
                'identity_id'       => $request->formData['ruleForm']['nomorKTP'],
                'tax_id'            => $request->formData['ruleForm']['nomorNPWP'],
                'driving_a'         => $request->formData['ruleForm']['nomorSIMA'],
                'driving_b'         => $request->formData['ruleForm']['nomorSIMB'],
                'driving_c'         => $request->formData['ruleForm']['nomorSIMC'],
                'birth_place'       => $request->formData['ruleForm']['tempatLahir'],
                'birth_date'        => $request->formData['ruleForm']['tanggalLahir'],
                'religion_id'       => $request->formData['ruleForm']['religion'],
                'blood_type'        => $request->formData['ruleForm']['golonganDarah'],
                'marital_status_id' => $request->formData['ruleForm']['marital'],
                'ethnicity_id'      => $request->formData['ruleForm']['etnicity'],
                'email'             => $request->formData['ruleForm']['email'],
                'mobile'            => $request->formData['ruleForm']['nomorHP'],
                'mobile_alt'        => $request->formData['ruleForm']['nomorHPAlt'],
                'address'           => $request->formData['ruleForm']['alamatAsal'],
                'region_id'         => $request->formData['ruleForm']['kodeDomisiliAsal'],
                'region'            => $request->formData['ruleForm']['domisiliAsal'],
                'zip'               => $request->formData['ruleForm']['kodePosAsal'],
                'address_home'      => $request->formData['ruleForm']['alamatTinggal'],
                'region_id_home'    => $request->formData['ruleForm']['kodeDomisiliTinggal'],
                'region_home'       => $request->formData['ruleForm']['domisiliTinggal'],
                'zip_home'          => $request->formData['ruleForm']['kodePosTinggal'],
            ]);

            $user = \App\Models\User::find($request->userId)->update([
                'person_id' => $person->person_id,
                'status_id' => 'USR101',
            ]);

            $user = User::find($request->userId);

            $success = true;
            $message = 'Berhasil';

        } catch (\Illuminate\Database\QueryException $ex) {
            $errorCode = $ex->errorInfo[1];
            $success = false;
            $user = User::find($request->userId);
            $message = $ex->getMessage();
            // $message = 'Gagal';
        }

        $response = [
            'success' => $success,
            'message' => $message,
            'user' => $user,
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
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Person $person)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Person $person)
    {
        //
    }
}
