<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_results', function (Blueprint $table) {
            // $table->id();
            $table->date('start_date');
            $table->date('end_date');
            $table->text('link');
            $table->integer('score');
            $table->unsignedBigInteger('test_id');
            $table->unsignedBigInteger('freelancer_id');
            $table->primary('test_id','freelancer_id');
            $table->timestamps();

            $table->foreign('test_id')->references('id')->on('tests');
            $table->foreign('freelancer_id')->references('id')->on('freelancers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('test_results');
    }
}
