<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin'),
            'remember_token' => null,
            'role_id' => 2,
            'climbing_level_id' => 1,
        ]);

        // Crea algunos usuarios
        $users = User::factory(9)->create();

        // Crea algunos eventos y asigna un creador a cada uno
        $events = Event::factory(10)->make()->each(function ($event) use ($users) {
            $event->user()->associate($users->random());
            $event->save();
        });

        // Pobla la tabla intermedia para la relación de participantes
        $events->each(function ($event) use ($users) {
            $event->participants()->attach(
                $users->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
