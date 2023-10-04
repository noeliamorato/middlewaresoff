<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Propietario_mascotas extends Model
{
    use HasFactory;
    protected $filable =[
        'ci',
        'nombres',
        'apellidos',
        'genero',
        'direccion',
        'telefono',
        'telf_movil',
        'correo',
    ];
}
