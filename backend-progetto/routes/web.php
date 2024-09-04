<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

Route::middleware(['auth'])->group(function () {
    Route::view('/appointments/create', 'app')->name('appointments.create');
    Route::view('/appointments', 'app')->name('appointments.index');
});
