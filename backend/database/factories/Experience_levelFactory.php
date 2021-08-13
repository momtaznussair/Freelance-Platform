<?php

namespace Database\Factories;

use App\Models\Experience_level;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class Experience_levelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Experience_level::class;

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
