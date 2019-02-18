<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');


//Route::get('/redirect', function () {
//    $query = http_build_query([
//        'client_id' => 3,
//        'redirect_uri' => 'http://master-data.local/callback',
//        'response_type' => 'code',
//        'scope' => '',
//    ]);
//
//    return redirect('http://master-data.local/oauth/authorize?'.$query);
//});
//
//
//Route::get('/callback', function () {
//    $http = new GuzzleHttp\Client;
//
//    $response = $http->post('http://master-data.local/oauth/token', [
//        'form_params' => [
//            'grant_type' => 'authorization_code',
//            'client_id' => 3,
//            'client_secret' => 'VAYJ1YpiCqheklJ8mzUQmDpZ9ayNaR76p6z5tfaX',
//            'redirect_uri' => 'http://master-data.local/callback',
//            'code' => request()->get('code')
//        ],
//    ]);
//
//    return json_decode((string) $response->getBody(), true);
//});