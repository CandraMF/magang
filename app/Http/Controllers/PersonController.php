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
        \App\Models\Person::create([
            // 'person_id'         => $request->person_id,
            'title_pre'         => $request->title_pre,
            'name'              => $request->name,
            'title_post'        => $request->title_post,
            'identity_id'       => $request->identity_id,
            'tax_id'            => $request->tax_id,
            'driving_a'         => $request->driving_a,
            'driving_b'         => $request->driving_b,
            'driving_c'         => $request->driving_c,
            'birth_place'       => $request->birth_place,
            'birth_date'        => $request->birth_date,
            'religion_id'       => $request->religion_id,
            'blood_type'        => $request->blood_type,
            'marital_status_id' => $request->marital_status_id,
            'ethnicity_id'      => $request->ethnicity_id,
            'email'             => $request->email,
            'mobile'            => $request->mobile,
            'mobile_alt'        => $request->mobile_alt,
            'address'           => $request->address,
            'region_id'         => '-',
            'zip'               => '-',
            'address_home'      => '-',
            'region_id_home'    => '-',
            'zip_home'          => '-'
        ]);
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
