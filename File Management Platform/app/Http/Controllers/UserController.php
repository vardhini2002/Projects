<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\UserGroups;
class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $user = User::with('group')->whereId(3)->first();
        $groups = $user->group->pluck('group_name')->toArray();
        return view('layouts.usertable',compact('users','groups'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('user.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'


        ]);

        $user = User::create($validated);

        // $group = Group::find("group"); // to be change
        $group = Group::where('name', $request->input('group'))->first();
        UserGroups::create([
            'user_id' => $user->id,
            'group_id' => $group->id
        ]);

        return redirect()->route('user.index')->with('success','User Inserted successfully!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        $group = User::with('group')->find($id);
        $groups = $user->group->pluck('group_name')->toArray();
        if($user)
        {
            return view('user.edit', compact('user','groups'));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        if (!$user) {
            return redirect()->route('user.index')->with('error', 'User not found');
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
        ]);
        $group = UserGroups::find($id);
        if (!$group) {
            return redirect()->route('user.index')->with('error', 'Group not found');
        }
        $group_id = UserGroups::find($request->group);

        $group->update([
            'group_id' => $group_id
        ]);

        return redirect()->route('user.index')->with('success','User updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        if(!$user)
        {
            return redirect()->route('user.index')->with('error', 'User not found');
        }
        $group = UserGroups::find($id);
        if($group)
        {
            $group->delete();
        }
        $user->delete();
        return redirect()->route('user.index')->with('success','User deleted successfully!');
    }


    public function assignGroup(Request $request)
    {
    $validated = $request->validate([
        'user_id' => 'required',
        'group_id' => 'required',
    ]);

    // Check if the user and group exist
    $user = User::find($validated['user_id']);
    $group = Group::find($validated['group_id']);

    if (!$user || !$group) {
        return redirect()->route('admin.assign')->with('error','User or Group not found');
    }
    // Check if the user is already assigned to the group
    if ($user->groups->contains($group)) {
        return redirect()->route('admin.assign')->with('error','User is already assigned to the group');
    }
    // Assign the user to the group
    $user->groups()->attach($group);
    return redirect()->route('admin.assign')->with('success','User assigned to the group successfully');
   }




}
