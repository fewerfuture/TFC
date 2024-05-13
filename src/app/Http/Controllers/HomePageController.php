<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class HomePageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Event::where('end_date', '<=', now())->update([
            'finished' => true,
        ]);

        $eventsData = Event::where('finished', false)
        ->with(['Climbing_level', 'Location', 'User'])
        ->orderBy('created_at', 'DESC')
        ->get();

        $joinedEvents = User::where('id', '=', Auth::id())->with('ParticipatingEvents')->get();

        return Inertia::render('HomePage', [
            'eventData' => $eventsData,
            'joinedEvents' => $joinedEvents
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
