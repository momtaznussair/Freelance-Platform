<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->decimal('payment_amount',8,2);
            $table->enum('current_state',[0,1])->default('0');
            $table->text('cover_letter');
            $table->text('attachment')->nullable();
            $table->integer('client_grade')->nullable();
            $table->text('client_comment')->nullable();
            $table->integer('freelancer_grade')->nullable();
            $table->text('freelancer_comment')->nullable();

            // $table->unsignedBigInteger('payment_style_id');
            $table->unsignedBigInteger('duration_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('job_id');
            
            $table->timestamps();

            // $table->foreign('payment_style_id')->references('id')->on('payment_styles');
            $table->foreign('duration_id')->references('id')->on('durations');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('job_id')->references('id')->on('jobs');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proposals');
    }
}
