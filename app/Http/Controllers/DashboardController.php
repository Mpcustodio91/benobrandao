<?php

namespace App\Http\Controllers;

use App\Models\Companie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {        
        // dd(Companie::orderBy('name')->get());
        return Inertia::render('Welcome', [
            'data' => Companie::orderBy('name')->get()
        ]);
    }
}
