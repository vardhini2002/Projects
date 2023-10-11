<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    //File and folder relationship
    
    public function folder()
    {
        return $this->belongsTo(Folder::class);
    }

    //File sharing

    public function sharedByUsers()
    {
        return $this->hasMany(FileShare::class, 'file_id');
    }
}
