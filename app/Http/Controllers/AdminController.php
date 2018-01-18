<?php

namespace App\Http\Controllers;

use App\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller {

	public function showAdmin() {
		return response()->json(Admin::all());
	}

	public function showOneAdmin($id) {
		return response()->json(Admin::find($id));
	}

	public function create(Request $request) {
		// $admin = Admin::create($request->all());
		$data = $request->all();
		// dd($request->file['avatar']);
		$this->validate($request,
			[
				'username' => 'required |
				min:4|max:100|unique:admin',
				'password' => 'required |
				min:4|max:100',
				'avatar' => 'mimes:jpeg,png',

			],
			[
				'username.required' => 'ban chua nhap ten !',

				'username.min' => 'tên thể loại tối thiểu là 4 ký tự',
				'username.unique' => 'ten da ton tai',
				'username.max' => 'toi da 100 ky tu',
				'password.required' => 'ban chua nhap mat khau !',
				'avatar.mimes' => 'file chua dung dinh dang!',

				'password.min' => 'mật khẩu tối thiểu là 4 ký tự',
				'password.max' => 'toi da 100 ky tu',
			]);
		if (isset($data['avatar'])) {
			$file = $data['avatar'];
			if ($file->getClientOriginalExtension() == 'jpg' || $file->getClientOriginalExtension() == 'png') {
				$a = str_random(5) . '.' . $file->getClientOriginalExtension();
				$file->move('img', $a);
				$data['avatar'] = $a;
			}
		}

		$data['password'] = md5($data['password']);
		// dd($data);

		$admin = Admin::create($data);

		// $admin = new Admin;
		// $admin->username = $dât['username'ư;
		// $admin->pasword = $dât['pasword'ư;
		// $admin->fullname = $dât['fullname'ư;
		// $admin->email = $data['phone'];
		// $admin->role = $data['role'];
		// $admin->api_token = $data['api_token'];
		// $admin->status = $data['status'];
		// $admin->save();
		return response()->json($admin, 201);
	}

	public function update(Request $request, $id) {
		$admin = Admin::findOrFail($id);
		$data = $request->all();
		// dd();
		if ($admin->username == $data['username']) {
			$this->validate($request,
				[
					'username' => 'required |
					min:4|max:100',
					'password' => 'required |
					min:4|max:100',
					'avatar' => 'mimes:jpeg,png',

				],
				[
					'username.required' => 'ban chua nhap ten !',

					'username.min' => 'tên thể loại tối thiểu là 4 ký tự',
					'username.unique' => 'ten da ton tai',
					'username.max' => 'toi da 100 ky tu',
					'password.required' => 'ban chua nhap mat khau !',
					'avatar.mimes' => 'file chua dung dinh dang!',

					'password.min' => 'mật khẩu tối thiểu là 4 ký tự',
					'password.max' => 'toi da 100 ky tu',
				]);
		} else {
			$this->validate($request,
				[
					'username' => 'required |
					min:4|max:100|unique:admin',
					'password' => 'required |
					min:4|max:100',
					'avatar' => 'mimes:jpeg,png',

				],
				[
					'username.required' => 'ban chua nhap ten !',

					'username.min' => 'tên thể loại tối thiểu là 4 ký tự',
					'username.unique' => 'ten da ton tai',
					'username.max' => 'toi da 100 ky tu',
					'password.required' => 'ban chua nhap mat khau !',
					'avatar.mimes' => 'file chua dung dinh dang!',

					'password.min' => 'mật khẩu tối thiểu là 4 ký tự',
					'password.max' => 'toi da 100 ky tu',
				]);
		}
		if (isset($data['avatar'])) {
			$file = $data['avatar'];
			if ($file->getClientOriginalExtension() == 'jpg' || $file->getClientOriginalExtension() == 'png') {
				$a = str_random(5) . '.' . $file->getClientOriginalExtension();
				$file->move('img', $a);
				$data['avatar'] = $a;
			}
		}

		$data['password'] = md5($data['password']);
		$admin->update($data);

		return response()->json($admin, 200);
	}

	public function delete($id) {
		Admin::findOrFail($id)->delete();
		return response('Deleted Successfully', 200);
	}
}