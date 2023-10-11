<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = Role::create(['name' => 'superadmin']);
        $owner = Role::create(['name' => 'owner']);
        $admin = Role::create(['name' => 'admin']);
        $viewer = Role::create(['name' => 'viewer']);

        $superadmin->givePermissionTo(['user_create','user_update','user_delete','files_folder_read','files_folder_download']);
        $owner->givePermissionTo(['files_folder_read','files_folder_download','files_folder_create','files_folder_update','files_folder_delete','user_update','user_delete']);
        $admin->givePermissionTo(['files_folder_read','files_folder_download','files_folder_delete','files_folder_update']);
        $viewer->givePermissionTo('files_folder_read');
    }
}