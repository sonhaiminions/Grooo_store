<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
 */
// use App\User;
$router->get('/', function () use ($router) {
	return $router->app->version();
});
$router->group(['prefix' => 'api'], function () use ($router) {
	$router->get('admin', ['uses' => 'AdminController@showAdmin']);

	$router->get('admin/{id}', ['uses' => 'AdminController@showOneAdmin']);

	$router->post('admin', ['uses' => 'AdminController@create']);

	$router->delete('admin/{id}', ['uses' => 'AdminController@delete']);

	$router->post('admin/{id}', ['uses' => 'AdminController@update']);
});
