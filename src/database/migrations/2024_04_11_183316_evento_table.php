<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('type');
            $table->boolean('finished');

            $table->foreignId('location_id')->nullable()->constrained('location')->cascadeOnDelete()->cascadeOnUpdate();

            $table->foreignId('climbing_level_id')->nullable()->constrained('climbing_level')->cascadeOnDelete()->cascadeOnUpdate();;

            $table->foreignId('user_id')->nullable()->constrained('user')->cascadeOnDelete()->cascadeOnUpdate();;

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event');
    }
};
