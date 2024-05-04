<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Evento>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(3),
            'start_date' => fake()->dateTimeBetween('+1 week', '+2 week'),
            'end_date' => fake()->dateTimeBetween('+3 weeks', '+4 weeks'),
            'type' => fake()->randomElement(['Climbing Gym', 'Rock Climbing', 'Via Ferrata']),
            'finished' => fake()->boolean(),

            'location_id' => fake()->randomDigitNotNull(),
            'climbing_level_id' => fake()->numberBetween(1, 27),
            'user_id' => fake()->randomDigitNotNull(),
        ];
    }
}
