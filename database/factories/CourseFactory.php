<?php

use Faker\Generator as Faker;

$factory->define(\App\Entities\Course::class, function (Faker $faker) {
    $name = $faker->name;
    return [
        'name' => $name,
        'alias' => \Illuminate\Support\Str::slug($name),
        'cover_image' => $faker->imageUrl(),
        'description' => $faker->paragraph
    ];
});
