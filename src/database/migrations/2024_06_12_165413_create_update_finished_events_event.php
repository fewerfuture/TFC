<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Crear el evento MySQL
        DB::unprepared("
            CREATE EVENT IF NOT EXISTS `update_finished_events`
            ON SCHEDULE EVERY 1 DAY
            STARTS '2024-05-17 00:00:00'
            ON COMPLETION PRESERVE
            ENABLE
            DO
            UPDATE event
            SET finished = TRUE
            WHERE end_date <= CURDATE() AND finished = FALSE;
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Eliminar el evento MySQL
        DB::unprepared("
            DROP EVENT IF EXISTS `update_finished_events`;
        ");
    }
};
