<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Folder;
use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function index($id)
    {
        $files = File::where('folder_id',$id)->get();
        $user = User::find(2);
        $groups = $user->group;

        $group = Group::find(1);

        $users = $group->user->pluck('name')->toArray();

       return view('layouts.personalfilestorage', compact('files','users'));
    }

    public function create()
    {
        return view('files.create');
    }

    public function store(Request $request, $folderId)
    {
        $request->validate([
            'file' => 'required|file|max:10240',
        ]);

        $uploadedFile = $request->file('file');
        $path = $uploadedFile->store('uploads/' . $folderId);
        $folder = Folder::find($folderId);

        File::create([
            'filename' => $uploadedFile->getClientOriginalName(),
            'path' => $path,
            'folder_id' => $folder->id
        ]);

        return redirect()->route('files.index')->with('success', 'File uploaded successfully.');
    }

    public function edit($id)
    {
        $file = File::find($id);

        return view('files.edit', compact('file'));
    }

    public function update(Request $request, $id)
    {
        $file = File::find($id);

        Storage::delete($file->path); // to be change

        $request->validate([
            'filename' => 'required|string|max:255',
            'file' => 'required|file|max:10240',
        ]);

        $uploadedFile = $request->file('file');
        $path = $uploadedFile->store('uploads/' . $file->folder_id);

        $file->update([
            'filename' => $request->input('filename'),
            'path' => $path,
        ]);

        return redirect()->route('files.index')->with('success', 'File updated successfully.');
    }

    public function destroy($id)
    {
        $file = File::find($id);

        Storage::delete($file->path);

        $file->delete();

        return redirect()->route('files.index')->with('success', 'File deleted successfully.');
    }
}
