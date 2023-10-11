<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
class FolderController extends Controller
{
    public function index()
    {
        $folders = Folder::where('user_id',2)->get();

            $user = User::find(2);
            $groups = $user->group;

            $group = Group::find(1);

            $users = $group->user->pluck('name')->toArray();
            return view('layouts.personalstorage', compact('folders','users'));

    }

    public function create()
    {
        return view('folders.create');
    }

    public function store(Request $request,$id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Folder::create([
            'folder_name' => $request->input('name'),
            'user_id'=> $id,
        ]);

        return redirect()->route('folders.index')->with('success', 'Folder created successfully.');
    }

    public function edit($id)
    {
        $folder = Folder::find($id);

        return view('folders.edit', compact('folder'));
    }

    public function update(Request $request, $id)
    {
        $folder = Folder::find($id);

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $folder->update([
            'name' => $request->input('name'),
        ]);

        return redirect()->route('folders.index')->with('success', 'Folder updated successfully.');
    }

    public function destroy($id)
    {
        $folder = Folder::find($id);

        $folder->delete();

        return redirect()->route('folders.index')->with('success', 'Folder deleted successfully.');
    }

}
