<?php

namespace App\Entities;

/**
 * Class UserLessonSave.
 *
 * @package namespace App\Entities;
 */
class UserLessonSave extends BaseModel
{
    protected $table = 'user_lesson_saves';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'course_id', 'lesson_id', 'save_time', 'is_finish'];

    protected $hidden = ['created_at', 'updated_at'];
}
