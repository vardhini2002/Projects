<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
		    $table->id();
		    $table->string('empId')->unique();
		    $table->string('name');
		    $table->date('dob')->nullable();
		    $table->string('gender')->nullable();
		    $table->string('email')->nullable();

		    $table->foreignId('departmentId')->constrained('departments');
		    $table->foreignId('designationId')->constrained('designations');

		    $table->date('dateOfJoining')->nullable();
		    $table->string('profilePic')->nullable();
		    $table->integer('sts')->default(1);

		    $table->timestamps();
		});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
