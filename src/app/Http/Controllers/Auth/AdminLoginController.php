<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AdminLoginController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/AdminLogin');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only(['email', 'password']);

        if (!Auth::attempt($credentials) || auth()->user()->role_id !== 2) {

            $error = User::where('email', $request->email)->exists() ?
            ['password' => 'The password does not match. Please try again.'] :
            ['email' => 'The email does not exist. Please register first.'];

            return redirect(route('adminLogin'))->withErrors($error);
        }

        return redirect(route('adminTool'));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(): RedirectResponse
    {
        Auth::logout();
        return redirect()->intended(RouteServiceProvider::HOME);
    }
}
