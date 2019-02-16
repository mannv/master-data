<?php

namespace App\Entities;

/**
 * Class Lesson.
 *
 * @package namespace App\Entities;
 */
class Lesson extends BaseModel
{
    protected $table = 'lessons';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['course_id', 'name', 'youtube_video', 'duration', 'is_free', 'weight'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function course()
    {
        return $this->hasOne(Course::class, 'id', 'course_id');
    }
}