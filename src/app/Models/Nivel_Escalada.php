<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Symfony\Component\CssSelector\XPath\Extension\FunctionExtension;

class Nivel_Escalada extends Model
{
    use HasFactory;

    #region relaciones
    public function Usuarios() : BelongsToMany{
        return $this->belongsToMany(Usuario::class);
    }

    public function Eventos() : BelongsToMany{
        return $this->belongsToMany(Evento::class);
    }
    #endregion
}
