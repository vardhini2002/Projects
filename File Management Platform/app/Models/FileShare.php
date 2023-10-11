<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileShare extends Model
{
    use HasFactory;

    //User table taken its s_id

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    //User table taken its r_id

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    //Which file to be shared

    public function file()
    {
        return $this->belongsTo(File::class);
    }

    //User role
    
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
