<?php

namespace App\Http\Controllers;

use App\Models\Person;
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
        \App\Models\Person::all();
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

        $personId = \App\Models\Person::insertGetId([
            // 'person_id'         => $request->formData['person_id'],
            'title_pre'         => $request->formData['gelarAwal'],
            'name'              => $request->formData['name'],
            'title_post'        => $request->formData['gelarAkhir'],
            'identity_id'       => $request->formData['nomorKTP'],
            'tax_id'            => $request->formData['nomorNPWP'],
            'driving_a'         => $request->formData['nomorSIMA'],
            'driving_b'         => $request->formData['nomorSIMB'],
            'driving_c'         => $request->formData['nomorSIMC'],
            'birth_place'       => $request->formData['tempatLahir'],
            'birth_date'        => $request->formData['tanggalLahir'],
            'religion_id'       => $request->formData['religion'],
            'blood_type'        => $request->formData['golonganDarah'],
            'marital_status_id' => $request->formData['marital'],
            'ethnicity_id'      => $request->formData['etnicity'],
            'email'             => $request->formData['email'],
            'mobile'            => $request->formData['nomorHP'],
            'mobile_alt'        => $request->formData['nomorHPAlt'],
            'address'           => $request->formData['alamatAsal'],
            'region_id'         => $request->formData['kodeDomisiliAsal'],
            'zip'               => $request->formData['kodePosAsal'],
            'address_home'      => $request->formData['alamatTinggal'],
            'region_id_home'    => $request->formData['kodeDomisiliTinggal'],
            'zip_home'          => $request->formData['kodePosTinggal'],
        ]);

        return response()->json($personId);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        //
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
