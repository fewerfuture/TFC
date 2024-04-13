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
        Schema::create('evento_usuario', function (Blueprint $table){
            $table->id();
            $table->foreignId('evento_id')->nulleable()->constrained('evento')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('usuario_id')->nulleable()->constrained('usuario')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evento_usuario');
    }
};
