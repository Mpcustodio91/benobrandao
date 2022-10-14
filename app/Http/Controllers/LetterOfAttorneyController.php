<?php

namespace App\Http\Controllers;

use App\Models\Companie;
use App\Models\LetterOfAttorney;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LetterOfAttorneyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('LetterOfAttorney/Index',[
            'letter' => LetterOfAttorney::with('companie')->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('LetterOfAttorney/Create',[
            'data' => Companie::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        LetterOfAttorney::create($request->all());

        return redirect()->route('letter-of-attorneys.index');
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('LetterOfAttorney/Edit',[
            'data' => Companie::all(),
            'letter' => LetterOfAttorney::with('companie')->where('id',$id)->first()
        ]);
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
        $contract = LetterOfAttorney::findOrFail($id);
        $contract->update(['description' => $request->description]);

        return redirect()->route('letter-of-attorneys.index')->with(['message' => 'Editado com sucesso']);
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
