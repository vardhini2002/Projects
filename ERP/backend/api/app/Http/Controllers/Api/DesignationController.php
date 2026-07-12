<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Designation;

class DesignationController extends Controller
{
    public function index()
    {
        return Designation::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $designation = Designation::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => 'active'
        ]);

        return response()->json($designation);
    }
}