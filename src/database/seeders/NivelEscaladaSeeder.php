<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NivelEscaladaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i <= 9; $i++) {
            for($l = 'a'; $l <= 'c'; $l++) {
                DB::table('climbing_level')->insert([
                    'grade' => $i.$l,
                    'type' => 'EU',
                ]);
            }
        }
    }
}
