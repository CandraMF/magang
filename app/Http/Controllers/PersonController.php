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
            // 'person_id'         => $request->person_id,
            'title_pre'         => $request->formData->title_pre,
            'name'              => $request->formData->name,
            'title_post'        => $request->formData->title_post,
            'identity_id'       => $request->formData->identity_id,
            'tax_id'            => $request->formData->tax_id,
            'driving_a'         => $request->formData->driving_a,
            'driving_b'         => $request->formData->driving_b,
            'driving_c'         => $request->formData->driving_c,
            'birth_place'       => $request->formData->birth_place,
            'birth_date'        => $request->formData->birth_date,
            'religion_id'       => $request->formData->religion_id,
            'blood_type'        => $request->formData->blood_type,
            'marital_status_id' => $request->formData->marital_status_id,
            'ethnicity_id'      => $request->formData->ethnicity_id,
            'email'             => $request->formData->email,
            'mobile'            => $request->formData->mobile,
            'mobile_alt'        => $request->formData->mobile_alt,
            'address'           => $request->formData->address,
            'region_id'         => '-',
            'zip'               => '-',
            'address_home'      => '-',
            'region_id_home'    => '-',
            'zip_home'          => '-'
        ]);

        return response()->json($request->formData);

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
