<?php

namespace App\Http\Controllers;

use App\Models\Climbing_level;
use App\Models\Event;
use App\Models\Location;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class AdminToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexUser()
    {

        return Inertia::render('Admin/AdminUserControlPanel', [
            'users' => User::with(['Role', 'Climbing_level'])->get(),
            'climbing_levels' => Climbing_level::get(),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function indexEvent()
    {
        // Event::get()->map->getAttributes()->all(),
        return Inertia::render('Admin/AdminEventControlPanel', [
            'events' => Event::with(['User', 'Location'])->get(),
            'climbing_levels' => Climbing_level::get(),
            'apiKey' => env('GOOGLE_MAPS_API_KEY'),
            'mapID' => env('GOOGLE_MAPS_ID_MAP')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function updateLocation(Request $request, Location $location)
    {
        $request->validate([
            'name' => 'required|string|max:55',
        ]);

        $location->update($request->only('name', 'latitude', 'longitude'));

        return redirect()->back()->with('success', 'User updated successfully');
    }

    /**
     * Display the specified resource.
     */
    public function updateEvent(Request $request, Event $event)
    {
        $request->validate([
            'name' => 'required|string|max:55',
            'start_date' => ['required', 'date', 'after:today'],
            'end_date' => ['required','date','after:start_date'],
            'type' => ['required', Rule::in(['Climbing Gym', 'Via Ferrata', 'Rock Climbing'])],
            'finished' => 'required|boolean',
            'climbing_level_id' => 'required|integer',
        ]);

        // Formatear las fechas correctamente
        $start_date = date('Y-m-d H:i:s', strtotime($request->input('start_date')));
        $end_date = date('Y-m-d H:i:s', strtotime($request->input('end_date')));

        // Actualizar el evento con las fechas formateadas
        $event->update([
            'name' => $request->input('name'),
            'start_date' => $start_date,
            'end_date' => $end_date,
            'type' => $request->input('type'),
            'finished' => $request->input('finished'),
            'climbing_level_id' => $request->input('climbing_level_id'),
        ]);

        return redirect()->back()->with('success', 'Evento actualizado correctamente');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function destroyEvent(Event $event)
    {
        $event->delete();

        return redirect()->back()->with('success', 'User deleted successfully');
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateUser(Request $request, User $user)
    {
        $test1 = $request;
        $test2=$user;

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:user,email,' . $user->id,
            'password' => $request->password ? ['required', Password::defaults()] : $user->password,
            'climbing_level_id' => 'required|integer',
            'role_id' => 'required|integer',
        ]);

        $user->update($request->only('name', 'email', 'password', 'climbing_level_id', 'role_id'));

        return redirect()->back()->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroyUser(User $user)
    {
        $user->delete();

        return redirect()->back()->with('success', 'User deleted successfully');
    }
}
