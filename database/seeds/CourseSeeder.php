<?php

use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * @var Faker
     */
    private $faker = null;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = app(Faker::class);
        factory(\App\Entities\Course::class, 100)->make()->each(function ($item) {
            $row = app(\App\Repositories\CourseRepository::class)->add($item->toArray());

            $totalLesson = $this->faker->biasedNumberBetween(5, 18);
            for ($i = 0; $i < $totalLesson; $i++) {
                $lesson = [
                    'course_id' => $row['data']['id'],
                    'name' => $this->faker->name,
                    'youtube_video' => 'https://www.youtube.com/watch?v=NzH9GO3gJlU',
                    'duration' => $this->faker->biasedNumberBetween(120, 500),
                    'is_free' => ($i < 3 ? true : false)
                ];
                app(\App\Repositories\LessonRepository::class)->add($lesson);
            }
        });
    }
}
