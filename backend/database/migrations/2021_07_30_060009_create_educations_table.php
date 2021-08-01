<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('educations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('institute');
            $table->date('start_date');
            $table->date('graduation_date');
            $table->unsignedBigInteger('freelancer_id');
            // $table->primary(['freelancer_id','id']);
            $table->timestamps();

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
        Schema::dropIfExists('educations');
    }
}
