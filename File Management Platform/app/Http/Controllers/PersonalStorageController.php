<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonalStorageController extends Controller
{
    public function index()
    {
       return view('layouts.personalstorage');
    }
}
