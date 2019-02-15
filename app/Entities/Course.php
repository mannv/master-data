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
    protected $fillable = ['name', 'cover_image', 'description'];

}
