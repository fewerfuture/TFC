<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Ubicacion extends Model
{
    use HasFactory;

    #region relaciones
    public function Eventos() : BelongsToMany {
        return $this->belongsToMany(Evento::class);
    }
    #endregion
}
