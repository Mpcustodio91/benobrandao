<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Companie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {        
        return Inertia::render('Welcome', [
            'data' => Companie::with('contract','letter')->has('contract')->has('letter')->orderBy('name')->get()
        ]);
    }
}
