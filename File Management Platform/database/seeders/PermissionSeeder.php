<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        //User-CRUD-Permissions
        Permission::create(['name'=>'user_create']);
        Permission::create(['name'=>'user_update']);
        Permission::create(['name'=>'user_delete']);

        //Files-CRUD-Permissions
        Permission::create(['name'=>'files_folder_read']);
        Permission::create(['name'=>'files_folder_create']);
        Permission::create(['name'=>'files_folder_update']);
        Permission::create(['name'=>'files_folder_delete']);
        Permission::create(['name'=>'files_folder_download']);
    }
}
