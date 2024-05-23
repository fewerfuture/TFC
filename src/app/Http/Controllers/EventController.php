<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventoRequest;
use App\Http\Requests\UpdateEventoRequest;
use App\Models\Climbing_level;
use App\Models\Event;
use App\Models\Location;
use App\Providers\RouteServiceProvider;
use DateTime;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(int $id)
    {
        $eventData = Event::with(['Location', 'Climbing_level', 'Participants.Climbing_level', 'User'])->findOrFail($id);

        return Inertia::render('Events/Event', [
            'event' => $eventData,
            'apiKey' => env('GOOGLE_MAPS_API_KEY'),
            'mapID' => env('GOOGLE_MAPS_ID_MAP')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Events/CreateEvent', [
            'climbing_level' => Climbing_level::get(),
            'locations' => Location::get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventoRequest $request)
    {

        $newStartDate = new DateTime($request->start_date);
        $newEndDate = new DateTime($request->end_date);

        $startDateFormated = $newStartDate->format('Y-m-d H:i:s');
        $endDateFormated = $newEndDate->format('Y-m-d H:i:s');

        $event = Event::create([
            'name' => $request->name,
            'start_date' => $startDateFormated,
            'end_date' => $endDateFormated ,
            'type' => $request->type,
            'finished' => $request->finished,
            'location_id' => $request->location,
            'climbing_level_id' => $request->climbing_level,
            'user_id' => Auth::id(),
        ]);

        $event->Participants()->attach(Auth::id());

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $evento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        $completeEvent = Event::with(['Location', 'Climbing_level', 'User'])->findOrFail($event->id);

        $startDateOriginal = $completeEvent->getRawOriginal('start_date');
        $endDateOriginal = $completeEvent->getRawOriginal('end_date');

        if(Auth::id() != $completeEvent->user->id){
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        return Inertia::render('Events/UpdateEvent', [
            'event' => $completeEvent,
            'start_date_original' => $startDateOriginal,
            'end_date_original' => $endDateOriginal,
            'climbing_level' => Climbing_level::get(),
            'locations' => Location::get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventoRequest $request, Event $event)
    {
        $userEvent = Event::with(['User'])->findOrFail($event->id);

        if(Auth::id() != $userEvent->user->id){
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        $newStartDate = new DateTime($request->start_date);
        $newEndDate = new DateTime($request->end_date);

        $startDateFormated = $newStartDate->format('Y-m-d H:i:s');
        $endDateFormated = $newEndDate->format('Y-m-d H:i:s');

        $event->update([
            'name' => $request->name,
            'start_date' => $startDateFormated,
            'end_date' => $endDateFormated ,
            'type' => $request->type,
            'location_id' => $request->location,
            'climbing_level_id' => $request->climbing_level,
        ]);

        return $this->index($event->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $userEvent = Event::with(['User'])->findOrFail($event->id);

        if(Auth::id() != $userEvent->user->id){
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        $userEvent->Participants()->detach(Auth::id());

        $userEvent->delete();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function joinEvent(Event $event){

        if ($event->Participants()->where('user_id', Auth::id())->exists()) {
            return $this->index($event->id);
        }

        $event->Participants()->attach(Auth::id());

        return redirect()->intended(route('event', $event->id));
    }

    public function leaveEvent(Event $event){

        if (!$event->Participants()->where('user_id', Auth::id())->exists()) {
            return $this->index($event->id);
        }

        $event->Participants()->detach(Auth::id());

        return $this->index($event->id);
    }
}
