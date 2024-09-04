<?php

// namespace App\Providers;

// use Illuminate\Auth\Notifications\ResetPassword;
// use Illuminate\Support\ServiceProvider;

use App\Models\Service;
use App\Policies\ServicePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;



class AppServiceProvider extends ServiceProvider
{
    
    protected $policies = [
        Service::class => ServicePolicy::class,
    ];

    public function boot()
    {
        $this->registerPolicies();
    }
    
    
    
    
    
    
    // /**
    //  * Register any application services.
    //  */
    // public function register(): void
    // {
    //     //
    // }

    // /**
    //  * Bootstrap any application services.
    //  */
    // public function boot(): void
    // {
    //     ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
    //         return config('app.frontend_url')."/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
    //     });
    // }
}
