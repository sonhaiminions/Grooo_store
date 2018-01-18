<?php

namespace App\Http\Controllers;
use App\User;

class UsersController extends Controller {

	public function index() {
		/**
		 * undocumented constant
		 **/
		//dd(1);
		// $results = DB::select("SELECT * FROM users");
		// return $results;
		$a = User::all();

		return $a;
		// return response()->json($a);
	}
}
