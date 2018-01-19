<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VersionController extends Controller {

	public function showVersion() {
		return response()->json(Version::all());
	}

	public function showOneVersion($id) {
		return response()->json(Version::find($id));
	}

	public function create(Request $request) {
		dd($request->all());
	}

	public function update(Request $request, $id) {

	}

	public function delete($id) {
		Admin::findOrFail($id)->delete();
		return response('Deleted Successfully', 200);
	}
}