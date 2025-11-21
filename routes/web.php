<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MapController;


Route::get('/', function () {
    return view('welcome');
});



Route::get('/', [HomeController::class, 'index']);
Route::get('/lokasi', [MapController::class, 'index']);



Route::get('/floriculture-detail', function () {
    return view('floriculture-detail');
});

Route::get('/lahan-melon', function () {
    return view('lahan-melon');
});

Route::get('/lahan-belakang-khd', function () {
    return view('lahan-belakang-khd');
})->name('lahan-belakang-khd');


Route::get('/lahan-belakang-khd', function () {
    return view('lahan-belakang-khd');
});

Route::get('/lahan-bunga-kol', function () {
    return view('lahan-bunga-kol');
});

Route::get('/hortikultura', function () {
    return view('hortikultura');
})->name('hortikultura');
