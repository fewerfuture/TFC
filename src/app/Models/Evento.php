<?php

namespace App\Models;

use App\Policies\NivelEscaladaPolicy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Evento extends Model
{
    use HasFactory;

    #region relaciones
    public function Nivel_Escalada() : HasOne {
        return $this->hasOne(Nivel_Escalada::class);
    }

    public function Ubicacion() : HasOne {
        return $this->hasOne(Ubicacion::class);
    }

    public function Creador() : HasOne {
        return $this->hasOne(Usuario::class);
    }

    public function Participantes() : BelongsToMany {
        return $this->belongsToMany(Usuario::class);
    }
    #endregion
}
