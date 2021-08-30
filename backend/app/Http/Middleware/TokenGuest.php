<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TokenGuest
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
        $token = $request->bearerToken();
        if($token){
            return response()->json(
                ['msg' => 'You are logged , logout and try again']
            );
        }

        return $next($request);
        
        // if($token == "null"){
        //     return $next($request);
        // }

        // return response()->json(
        //     ['msg' => 'You are logged , logout and try again']
        // );
    }
}
