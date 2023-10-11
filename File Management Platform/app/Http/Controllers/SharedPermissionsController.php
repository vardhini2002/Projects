<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SharedPermissionsController extends Controller
{
    public function index()
    {
        $user=User::all();
       return view('layouts.permissiontable',compact('user'));
    }
}
