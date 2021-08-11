<?php

namespace Database\Factories;

use App\Models\Duration;
use Illuminate\Database\Eloquent\Factories\Factory;

class DurationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Duration::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word()
        ];
    }
}
