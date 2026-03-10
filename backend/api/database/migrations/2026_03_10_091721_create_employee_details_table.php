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
        Schema::create('employee_details', function (Blueprint $table) {
		    $table->id();

		    $table->foreignId('employeeId')->constrained('employees')->cascadeOnDelete();

		    $table->string('fatherName')->nullable();
		    $table->string('motherName')->nullable();

		    $table->string('mobileNumber')->nullable();
		    $table->string('alternateContact')->nullable();

		    $table->string('currentAddressLine1')->nullable();
		    $table->string('currentCity')->nullable();
		    $table->string('currentState')->nullable();
		    $table->string('currentPincode')->nullable(); 

		    $table->string('permanentAddressLine1')->nullable();
		    $table->string('permanentCity')->nullable();
		    $table->string('permanentState')->nullable();
		    $table->string('permanentPincode')->nullable();

		    $table->string('bloodGroup')->nullable();

		    $table->string('aadhar')->nullable();
		    $table->string('pan')->nullable();

		    $table->string('bankName')->nullable();
		    $table->string('accountNumber')->nullable();

		    $table->string('qualification')->nullable();
		    $table->integer('yearPassedOut')->nullable();

		    $table->string('maritalStatus')->nullable();
		    $table->string('spouseName')->nullable();

		    $table->decimal('totalExperienceYears',4,1)->nullable();

		    $table->integer('sts')->default(1);

		    $table->timestamps();
		});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_details');
    }
};




