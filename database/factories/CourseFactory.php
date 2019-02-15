<?php

use Faker\Generator as Faker;

$factory->define(\App\Entities\Course::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'cover_image' => $faker->imageUrl(),
        'description' => $faker->paragraph
    ];
});
