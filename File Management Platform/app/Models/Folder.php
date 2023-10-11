<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;

    //Folder belogs to

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //Folder contains

    public function files()
    {
        return $this->hasMany(File::class);
    }

    //Folder Sharing

    public function sharedByUsers()
    {
        return $this->hasMany(FolderShare::class, 'folder_id');
    }
}
