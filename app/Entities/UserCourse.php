<?php

namespace App\Entities;

/**
 * Class UserCourse.
 *
 * @package namespace App\Entities;
 */
class UserCourse extends BaseModel
{
    protected $table = 'user_courses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'course_id'];

    protected $hidden = ['updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function course()
    {
        return $this->hasOne(Course::class, 'id', 'course_id');
    }
}
