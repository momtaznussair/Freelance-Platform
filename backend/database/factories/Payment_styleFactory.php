<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Payment_style;
use Illuminate\Database\Eloquent\Factories\Factory;

class Payment_styleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Payment_style::class;

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
