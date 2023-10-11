<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\PersonalStorageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SharedPermissionsController;
use App\Http\Controllers\SharedController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', function () {
    return view('admin.index');
})->middleware(['auth', 'role:superadmin'])->name('admin.index');

Route::group(['prefix' => 'admin'], function () {
    Route::group(['middleware' => 'role:superadmin'], function () {
        Route::get('/create', [UserController::class, 'create'])->name('user.create');
        Route::get('/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
        Route::post('', [UserController::class, 'store'])->name('user.store');
        Route::put('/{user}', [UserController::class, 'update'])->name('user.update');
        Route::delete('/{user}', [UserController::class, 'destroy'])->name('user.delete');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/logout',function(){
    Auth::logout();
            return redirect('/');
})->name('logout');


require __DIR__.'/auth.php';

Route::get('usertabel', [UserController::class,'index'])->name('usertabel');
Route::get('/group-management', [GroupController::class,'index'])->name('group-management');
Route::get('permission-management', [SharedPermissionsController::class,'index'])->name('permission-management');
Route::get('personal-storage', [FolderController::class,'index'])->name('personal-storage');
Route::get('shared-storage', [SharedController::class,'index'])->name('shared-storage');
Route::get('/file-shared-storage/{folder_id}', [FileController::class,'index'])->name('file-shared-storage');


Route::get('/user.add', [UserController::class,'usertable'])->name('user.add');
Route::get('/user.delete', [UserController::class,'usertable'])->name('user.delete');
