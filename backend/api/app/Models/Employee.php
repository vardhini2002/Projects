<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'empId',
        'name',
        'dob',
        'gender',
        'email',
        'departmentId',
        'designationId',
        'dateOfJoining',
        'profilePic',
        'status'
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'departmentId');
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class, 'designationId');
    }

    public function employeeDetail()
    {
        return $this->hasOne(EmployeeDetail::class, 'employeeId');
    }
}
