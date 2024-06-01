<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'role';

    #region relaciones
    public function Usuarios() : HasMany{
        return $this->hasMany(User::class);
    }
    #endregion
}
