<?php

namespace App\Repositories;

/**
 * Interface UserCourseRepository.
 *
 * @package namespace App\Repositories;
 */
interface UserCourseRepository extends MyRepository
{
    public function getUserCourse();

    public function checkRegister($courseId);
}
