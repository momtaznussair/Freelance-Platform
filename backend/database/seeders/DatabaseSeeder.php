<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Duration::factory(3)->create();
        \App\Models\Experience_level::factory(3)->create();
        \App\Models\Payment_style::factory(3)->create();
        \App\Models\Category::factory(3)->create();
        \App\Models\Skill::factory(3)->create();
        \App\Models\Job::factory(100)->create();
        \App\Models\JobSkill::factory(300)->create();
    }
}
