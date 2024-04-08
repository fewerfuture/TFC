<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Rol extends Model
{
    use HasFactory;

    #region relaciones
    public function Usuarios() : BelongsToMany{
        return $this->BelongsToMany(Rol::class);
    }
    #endregion
}
