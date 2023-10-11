<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use App\Models\Group;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable , HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    //User and their groups

    public function group()
    {
        return $this->belongsToMany(Group::class,UserGroups::class);
    }

    //User has many folders

    public function folders()
    {
        return $this->hasMany(Folder::class);
    }

    //User for file sharing

    public function sharedFiles()
    {
        return $this->hasMany(FileShare::class, 'receiver_id');
    }

    //User for folder sharing

    public function sharedFolders()
    {
        return $this->hasMany(FolderShare::class, 'receiver_id');
    }


}
