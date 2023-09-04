<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

class LogRequestInfo
{
    public function handle($request, Closure $next)
    {
        $start = microtime(true);

        // Handle the request and get the response
        $response = $next($request);

        $end = microtime(true);
        $time = ($end - $start) * 1000; // Convert to milliseconds

        // Get the request path and route name
        $path = Request::path();
        $routeName = Route::currentRouteName();

        // Log to the console
        $logMessage = "Request to '$path' (Route: $routeName) took $time ms";
        // echo($logMessage);

        // Log to the Laravel log
        Log::info($logMessage);

        return $response;
    }
}