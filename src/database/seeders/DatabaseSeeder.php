<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ClimbingLevelSeeder::class,
            RoleSeeder::class,
            LocationSeeder::class,
            //UserSeeder::class,
            //EventSeeder::class,
            EventUserSeeder::class
        ]);
    }
}
