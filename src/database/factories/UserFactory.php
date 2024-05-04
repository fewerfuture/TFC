<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name,
            'email' => fake()->unique()->safeEmail,
            'password' => bcrypt('admin'), // La contraseña siempre será 'admin'
            'role_id' => fake()->numberBetween(1, 2),
            'climbing_level_id' => fake()->numberBetween(1, 20)
        ];
    }
}
