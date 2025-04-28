<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use App\Models\SocialLink;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force HTTPS in production
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
        
        // Set default string length for database columns
        Schema::defaultStringLength(191);
        
        // Share social links with all views
        if (Schema::hasTable('social_links')) {
            Inertia::share('sharedSocialLinks', function () {
                return SocialLink::active()->ordered()->get();
            });
        }
    }
}