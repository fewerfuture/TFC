<?php

use App\Http\Controllers\AdminToolController;
use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', [HomePageController::class, 'index'])->name('HomePage');

Route::get('event/{id}', [EventController::class, 'index'])->name('event');

Route::get('/inprogress', function() {
    return Inertia::render('InProgress');
})->name('inprogress');


Route::middleware('guest')->group(function () {

    Route::get('/adminLogin', [AdminLoginController::class, 'create']);
    Route::post('/adminLogin', [AdminLoginController::class, 'store'])->name('adminLogin');

    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

});

Route::middleware('auth')->group(function () {
    //Log Out
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    //Create event
    Route::get('createEvent', [EventController::class, 'create'])->name('createEvent');
    Route::post('createEvent', [EventController::class, 'store']);

    //Update event
    Route::get('updateEvent/{event}', [EventController::class, 'edit'])->name('updateEvent');
    Route::post('updateEvent/{event}', [EventController::class, 'update']);

    //Delete event
    Route::get('deleteEvent/{event}', [EventController::class, 'destroy'])->name('deleteEvent');

    //Join and leave event
    Route::get('joinEvent/{event}', [EventController::class, 'joinEvent'])->name('joinEvent');
    Route::get('leaveEvent/{event}', [EventController::class, 'leaveEvent'])->name('leaveEvent');

    //profile
    Route::get('profile', [ProfileController::class, 'edit'])->name('editProfile');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

});

Route::middleware('checkRole:2')->group(function () {
    Route::get('/adminTool/users', [AdminToolController::class, 'indexUser'])->name('adminTool.users');
    Route::get('/adminTool/events', [AdminToolController::class, 'indexEvent'])->name('adminTool.events');

    Route::put('/adminTool/user/{user}', [AdminToolController::class, 'updateUser'])->name('adminTool.updateUser');
    Route::delete('adminTool/user/{user}', [AdminToolController::class, 'destroyUser'])->name('adminTool.destroyUser');

    Route::put('/adminTool/event/{event}', [AdminToolController::class, 'updateEvent'])->name('adminTool.updateEvent');
    Route::delete('/adminTool/event/{event}', [AdminToolController::class, 'destroyEvent'])->name('adminTool.destroyEvent');

    Route::put('/adminTool/location/{location}', [AdminToolController::class, 'updateLocation'])->name('adminTool.updateLocation');

});

require __DIR__.'/auth.php';
