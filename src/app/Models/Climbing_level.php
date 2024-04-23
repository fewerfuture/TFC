<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Climbing_level extends Model
{
    use HasFactory;

    protected $table = 'climbing_level';

    #region relaciones
    public function Usuarios() : BelongsToMany{
        return $this->belongsToMany(User::class);
    }

    public function Eventos() : BelongsToMany{
        return $this->belongsToMany(Event::class);
    }
    #endregion
}
