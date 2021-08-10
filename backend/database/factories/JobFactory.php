<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class JobFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Job::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'job_title' => Str::random(10),
            'description' => $this->faker->text(),
            'duration_id' => $this->faker->numberBetween($min = 1, $max = 3),
            'payment_amount' => $this->faker->numberBetween($min = 10, $max = 300),
            'client_id' => 1,
            'experience_id' => $this->faker->numberBetween($min = 1, $max = 3),
            'payment_style_id' => $this->faker->numberBetween($min = 1, $max = 2),
            'category_id' => $this->faker->numberBetween($min = 1, $max = 3),
        ];
    }
}
