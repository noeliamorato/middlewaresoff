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
        Schema::create('propietario_mascotas', function (Blueprint $table) {
            $table->id();
            $table->string('ci');
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('genero');
            $table->string('direccion');
            $table->integer('telefono');
            $table->integer('telf_movil');
            $table->string('correo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('propietario_mascotas');
    }
};
