<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


$api = app(\Dingo\Api\Routing\Router::class);

$rateLimit = [
//    'middleware' => 'api.throttle',
//    'limit' => 200,
//    'expires' => 1,
    'namespace' => 'App\API\V1\Controllers'
];

$api->version('v1', $rateLimit, function (\Dingo\Api\Routing\Router $api) {
    $api->post('/login', 'UserController@login');
});

$rateLimit = [
    'middleware' => ['auth:api'],
    'namespace' => 'App\API\V1\Controllers'
];
$api->version('v1', $rateLimit, function (\Dingo\Api\Routing\Router $api) {
    $api->get('/users', 'UserController@index');
    $api->get('/course', 'CourseController@index');
    $api->post('/course', 'CourseController@store');
    $api->get('/course/my-course', 'CourseController@myCourse');
    $api->get('/course/{id}', 'CourseController@show');

    $api->get('/lesson/{id}', 'LessonController@show');
    $api->post('/lesson', 'LessonController@store');
    $api->put('/lesson', 'LessonController@update');
});
