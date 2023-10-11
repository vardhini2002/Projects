<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FolderShare extends Model
{
    use HasFactory;


    //User table taken its s_id

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    //User table taken its s_id

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    //Folder to be shared

    public function folder()
    {
        return $this->belongsTo(Folder::class);
    }

    //User role

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

}
