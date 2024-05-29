<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Location extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'location';
    protected $fillable = [
        'name',
        'latitude',
        'longitude',
    ];

    #region relaciones
    public function Events() : HasMany {
        return $this->hasMany(Event::class);
    }
    #endregion
}
