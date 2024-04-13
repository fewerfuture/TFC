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
        Schema::create('evento', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->dateTime('Fecha_Inicio');
            $table->dateTime('Fecha_Fin');
            $table->string('Tipo');
            $table->boolean('Finalizado');

            $table->foreignId('ubicacion_id')->nullable()->constrained('ubicacion')->cascadeOnDelete()->cascadeOnUpdate();

            $table->foreignId('nivel_id')->nullable()->constrained('nivel_escalada')->cascadeOnDelete()->cascadeOnUpdate();

            $table->foreignId('usuario_id')->nullable()->constrained('usuario')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evento');
    }
};
