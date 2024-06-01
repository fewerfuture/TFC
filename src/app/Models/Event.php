<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;


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

    #region Accessors
    // Accessor para start_date
    public function getStartDateAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->format('d-m-Y H:i');
    }

    // Accessor para end_date
    public function getEndDateAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->format('d-m-Y H:i');
    }
    #endregion


    #region relaciones
    public function Climbing_level() : BelongsTo {
        return $this->belongsTo(Climbing_level::class);
    }

    public function Location() : BelongsTo {
        return $this->belongsTo(Location::class);
    }

    public function User() : BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function Participants() : BelongsToMany {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id');
    }
    #endregion
}
