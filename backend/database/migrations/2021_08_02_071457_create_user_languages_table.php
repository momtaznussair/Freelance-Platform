<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLanguagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_languages', function (Blueprint $table) {
            // $table->id();
            // $table->string('language');
            // $table->string('language_level');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('language_id');
            $table->unsignedBigInteger('language_level_id');
            $table->primary(['user_id','language_id']);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('language_id')->references('id')->on('languages');
            $table->foreign('language_level_id')->references('id')->on('language_levels');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_languages');
    }
}
