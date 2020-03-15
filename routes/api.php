<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/kawal/covid','Api\ApiKawalCovid@kawalCovid');
Route::get('/kawal/covid/world','Api\ApiKawalCovid@kawalCovidWorld');
Route::get('/kawal/covid/world/count','Api\ApiKawalCovid@kawalCovidWorldCount');
Route::get('/kawal/{any}',function (){return response()->json(['message' => 'Not Found.'], 404);})->where('any','.*');
Route::get('/kawal/covid/{any}',function (){return response()->json(['message' => 'Not Found.'], 404);})->where('any','.*');
Route::get('/kawal/covid/world/{any}',function (){return response()->json(['message' => 'Not Found.'], 404);})->where('any','.*');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
