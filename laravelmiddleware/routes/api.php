<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route; 
use App\Http\Controllers\Propietario_mascotasController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/Propietario_mascotas', [Propietario_mascotasController::class, 'index']);
Route::post('/Propietario_mascotas', [Propietario_mascotasController::class, 'store']);
Route::put('/Propietario_mascotas/{id}', [Propietario_mascotasController::class, 'update']);
Route::delete('/Propietario_mascotas/{id}', [Propietario_mascotasController::class, 'destroy']);
