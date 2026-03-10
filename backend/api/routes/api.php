<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\DesignationController;

Route::apiResource('employees', EmployeeController::class);

Route::get('departments', [DepartmentController::class, 'index']);
Route::post('departments', [DepartmentController::class, 'store']);

Route::get('designations', [DesignationController::class, 'index']);
Route::post('designations', [DesignationController::class, 'store']);
Route::get('employees/master-data',[EmployeeController::class,'masterData']);