<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\FileShare;
use App\Models\Folder;
use App\Models\FolderShare;
use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class SharedController extends Controller
{

    public function index()
    {
         $files=FileShare::where('receiver_id',2)->get();
         $folder=FolderShare::where('receiver_id',2)->get();

         return view('layouts.sharedstorage',compact('files','folder'));
    }


    public function fileshare(Request $request,$fileid,$userid){
        $file = File::find($fileid);
        $user = User::find($userid);
        $reciever = User::find($request->id);
        $role = Role::find($request->role);
        FileShare::create([
            'sender_id' => $user->name,
            'receiver_id' => $reciever->id,
            'file_id' => $file->filename,
            'role_id' => $role->id,
        ]);

        return redirect()->route('files.index')->with('success', 'File shared successfully.');
    }

    public function foldershare(Request $request,$folderid,$userid){
        $folder = Folder::find($folderid);
        $reciever = User::find($request->id);
        $role = Role::find($request->role);
        FolderShare::create([
            'sender_id' => $userid,
            'receiver_id' => $reciever->id,
            'folder_id' => $folder->id,
            'role_id' => $role->id,
        ]);

        return redirect()->route('folders.index')->with('success', 'Folder shared successfully.');
    }


}
