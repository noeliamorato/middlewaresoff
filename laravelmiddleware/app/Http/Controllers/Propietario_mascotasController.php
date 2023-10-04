<?php

namespace App\Http\Controllers;

use App\Models\Propietario_mascotas;
use Illuminate\Http\Request;

class Propietario_mascotasController extends Controller
{
    public function index()
    {
        return Propietario_mascotas::all();
    }
    public function store(Request $request)
    { 
        //registrar a la base de datos
        $Propmas=new Propietario_mascotas();
        $Propmas->ci=$request->ci;
        $Propmas->nombres=$request->nombres;
        $Propmas->apellidos=$request->apellidos;
        $Propmas->genero=$request->genero;
        $Propmas->direccion=$request->direccion;
        $Propmas->telefono=$request->telefono;
        $Propmas->telf_movil=$request->telf_movil;
        $Propmas->correo=$request->correo;
        $Propmas->save();
        return $Propmas;
    }
    // actualizar
    public function update(Request $request, $id)
    {
        $Propmas=Propietario_mascotas::find($id);
        $Propmas->ci=$request->ci;
        $Propmas->nombres=$request->nombres;
        $Propmas->apellidos=$request->apellidos;
        $Propmas->genero=$request->genero;
        $Propmas->direccion=$request->direccion;
        $Propmas->telefono=$request->telefono;
        $Propmas->telf_movil=$request->telf_movil;
        $Propmas->correo=$request->correo;
        $Propmas->save();
        return $Propmas;
    }
    public function destroy($id)
    {
        return Propietario_mascotas::destroy($id);
    }
}
