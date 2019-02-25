<?php

namespace App\Repositories;

/**
 * Interface UserLessonSaveRepository.
 *
 * @package namespace App\Repositories;
 */
interface UserLessonSaveRepository extends MyRepository
{
    public function getLessonSave($lessonId);

    public function saveLesson($attributes = [], $id);
}
