<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\EmployeeDetail;

class EmployeeController extends Controller
{
    public function index(Request $request)
	{
	    $query = Employee::with([
	        'department',
	        'designation',
	        'employeeDetail'
	    ]);

	    if ($request->search) {
	        $query->where('name', 'like', '%'.$request->search.'%')
	              ->orWhere('empId', 'like', '%'.$request->search.'%');
	    }

	    $employees = $query->paginate(10);

	    return response()->json($employees);
	}

	public function store(Request $request)
	{
	    $validated = $request->validate([
	        'empId' => 'required|unique:employees,empId',
	        'name' => 'required',
	        'email' => 'nullable|email',
	        'departmentId' => 'required',
	        'designationId' => 'required'
	    ]);

	    $employee = Employee::create([
	        'empId' => $validated['empId'],
	        'name' => $validated['name'],
	        'dob' => $request->dob,
	        'gender' => $request->gender,
	        'email' => $validated['email'] ?? null,
	        'departmentId' => $validated['departmentId'],
	        'designationId' => $validated['designationId'],
	        'dateOfJoining' => $request->dateOfJoining,
	        'sts' => 1
	    ]);

	    EmployeeDetail::create([
	        'employeeId' => $employee->id,
	        'fatherName' => $request->fatherName,
	        'motherName' => $request->motherName,
	        'mobileNumber' => $request->mobileNumber
	    ]);

	    return response()->json($employee);
	}

    public function show($id)
    {
        return Employee::with(['department','designation','employeeDetail'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);

        $employee->update($request->all());

        return response()->json($employee);
    }

    public function destroy($id)
    {
        Employee::destroy($id);

        return response()->json(['message' => 'Employee deleted']);
    }

    public function masterData()
	{
	    return response()->json([
	        'departments' => Department::where('status','active')->get(),
	        'designations' => Designation::where('status','active')->get()
	    ]);
	}
}