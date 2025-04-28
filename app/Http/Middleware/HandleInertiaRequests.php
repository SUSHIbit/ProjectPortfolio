<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use App\Models\SocialLink;
use Illuminate\Support\Facades\Route;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                'url' => $request->url(),
                'port' => null,
                'defaults' => [],
                'routes' => collect(Route::getRoutes()->getRoutesByName())
                    ->mapWithKeys(function ($route, $name) {
                        return [$name => $route->uri()];
                    })->toArray(),
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'socialLinks' => fn () => SocialLink::where('active', true)->orderBy('order')->get(),
        ];
    }
}