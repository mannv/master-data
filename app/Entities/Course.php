<?php

namespace App\Entities;

/**
 * Class Course.
 *
 * @package namespace App\Entities;
 */
class Course extends BaseModel
{
    protected $table = 'courses';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'alias', 'cover_image', 'description', 'feature'];

    protected $hidden = ['updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function lessons()
    {
        return $this->hasMany(Lesson::class, 'course_id', 'id')->orderBy('weight');
    }
}
