<?php

namespace App\Http\Controllers;

use App\Models\Companie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CompanieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Companie/Index',[
            'companies' => Companie::paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Companie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);        
        if(isset($request->file)){
            $fileName = hash('sha256',time()).'.'.$request->file->extension();
            $request['image'] = $fileName;
            $request->file->storeAs('ImgesCompanies',$fileName,'public');
        }
        
        Companie::create($request->all());

        return Redirect::route('companies.index')->with(['message' => 'Empresa criada com sucesso']);
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('Companie/Edit',[
            'companie' => Companie::findOrFail($id)
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
        $request->validate([
            'name' => 'required'
        ]);
        dd($request->all());
        $companie = Companie::findOrFail($id);
        if(isset($request->file)){
            $fileName = hash('sha256',time()).'.'.$request->file->extension();
            $request['image'] = $fileName;
            $request->file->storeAs('ImgesCompanies',$fileName,'public');            
            Storage::delete("ImgesCompanies/{$companie->iamge}");
        }
        
        $companie->update($request->all());        
        return Redirect::back()->with('success', 'Organization created.');
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
