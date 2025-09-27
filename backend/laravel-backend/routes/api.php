<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/get_employees_record_based_on_current_date',[LeaveController::class,'get_employees_all_for_current_date']);
Route::get('/get_employees_all_for_current_date_by_depart',[LeaveController::class,'get_employees_all_for_current_date_by_depart']);

/*---------*/
Route::get('/get_employees_all_for_current_date_by_depart',[LeaveController::class,'get_employees_all_for_current_date_by_depart']);

/*----------*/

