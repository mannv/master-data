<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(\App\Repositories\UserRepository::class, \App\Repositories\UserRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\CourseRepository::class, \App\Repositories\CourseRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\LessonRepository::class, \App\Repositories\LessonRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\UserCourseRepository::class, \App\Repositories\UserCourseRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\UserLessonSaveRepository::class, \App\Repositories\UserLessonSaveRepositoryEloquent::class);
        //:end-bindings:
    }
}
