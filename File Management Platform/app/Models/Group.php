<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Group extends Model
{
    use HasFactory;

    protected $table = 'groups';

    //Group and its users

    public function user()
    {
        return $this->belongsToMany(User::class,UserGroups::class);
    }
}
