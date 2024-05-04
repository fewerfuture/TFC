<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventoRequest;
use App\Http\Requests\UpdateEventoRequest;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(int $id)
    {
        $event = Event::with(['Location', 'Climbing_level', 'Participants.Climbing_level', 'User'])->findOrFail($id);
        return Inertia::render('Events/Event', [
            'event' => $event,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventoRequest $request)
    {
        //
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
    public function edit(Event $evento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventoRequest $request, Event $evento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $evento)
    {
        //
    }
}
