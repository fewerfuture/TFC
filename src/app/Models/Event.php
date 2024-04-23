<?php

namespace App\Models;

use App\Policies\NivelEscaladaPolicy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Event extends Model
{
    use HasFactory;

    protected $table = 'event';

    #region relaciones
    public function Nivel_Escalada() : HasOne {
        return $this->hasOne(Climbing_level::class);
    }

    public function Ubicacion() : HasOne {
        return $this->hasOne(Location::class);
    }

    public function Creador() : HasOne {
        return $this->hasOne(User::class);
    }

    public function Participantes() : BelongsToMany {
        return $this->belongsToMany(User::class);
    }
    #endregion
}
