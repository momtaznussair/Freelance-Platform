<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFreelancerSkillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freelancer_skill', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('freelancer_id');
            $table->unsignedBigInteger('skill_id');
            $table->timestamps();
            $table->foreign('skill_id')->references('id')->on('skills');
            $table->foreign('freelancer_id')->references('id')->on('freelancers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('freelancer_skills');
    }
}
