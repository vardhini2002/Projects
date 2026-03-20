<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function index()
    {
        return Department::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $department = Department::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => 'active'
        ]);

        return response()->json($department);
    }
}