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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->string('Correo')->unique();
            $table->string('Contraseña');

            //$table->unsignedInteger('rol_id')->nullable();
            $table->foreignId('rol_id')->nullable()->constrained('rol')->cascadeOnDelete()->cascadeOnUpdate();

            //$table->unsignedInteger('nivel_id')->nullable();
            $table->foreignId('nivel_id')->nullable()->constrained('nivel_escalada')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario');
    }
};
