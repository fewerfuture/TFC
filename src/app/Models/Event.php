<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Event extends Model
{
    use HasFactory;

    protected $table = 'event';
    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'type',
        'finished',
        'location_id',
        'climbing_level_id',
        'user_id',
    ];

    #region relaciones
    public function Climbing_level() : BelongsTo {
        return $this->belongsTo(Climbing_level::class);
    }

    public function Location() : BelongsTo {
        return $this->belongsTo(Location::class);
    }

    //Event model
    public function User() : BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function Participants() : BelongsToMany {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id');
    }
    #endregion
}
