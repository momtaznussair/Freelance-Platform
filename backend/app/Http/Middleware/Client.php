<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Client
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $id = $request->user()->client->id ?? null;

        if($id == null){
            return response()->json([
                'msg' => 'You are not allowed'
            ]);
        }
        return $next($request);
    }
}
