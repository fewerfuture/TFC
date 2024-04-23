<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Nivel_Escalada;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            //EventoSeeder::class,
            NivelEscaladaSeeder::class,
            RolSeeder::class,
            //UbicacionSeeder::class,
            UsuarioSeeder::class,
        ]);
    }
}
