<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PassportController extends Controller
{
  /**
   * Handles Registration Request
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function register(Request $request)
  {
      $this->validate($request, [
          'name' => 'required|min:3',
          'email' => 'required|email|unique:users',
          'password' => 'required|min:6',
      ]);

      $user = User::create([
          'name' => $request->name,
          'email' => $request->email,
          'password' => bcrypt($request->password)
      ]);

      $token = $user->createToken('TutsForWeb')->accessToken;

      return response()->json(['token' => $token], 200);
  }

  /**
   * Handles Login Request
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function login(Request $request)
  {
      $credentials = [
          'email' => $request->email,
          'password' => $request->password
      ];

      if (auth()->attempt($credentials)) {
          //$token = auth()->user()->createToken($credentials['email'])->accessToken;
          $token_obj = auth()->user()->createToken($credentials['email']);
          $token = $token_obj->token;
          $token->expires_at = Carbon::now()->addWeeks(4);
          $token->save();
          return response()->json(['token' => $token_obj->accessToken, 'expires_at' => Carbon::parse($token_obj->token->expires_at)->toDateTimeString()], 200);
      } else {
          return response()->json(['error' => 'UnAuthorised'], 401);
      }
  }

  /**
   * Returns Authenticated User Details
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function details()
  {
      return response()->json(['user' => auth()->user()], 200);
  }
}
