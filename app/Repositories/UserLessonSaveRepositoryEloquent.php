<?php

namespace App\Repositories;

use App\Entities\UserLessonSave;
use App\Presenters\UserLessonSavePresenter;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class UserLessonSaveRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserLessonSaveRepositoryEloquent extends MyRepositoryEloquent implements UserLessonSaveRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return UserLessonSave::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
        $this->setPresenter(app(UserLessonSavePresenter::class));
    }

    public function getLessonSave($lessonId)
    {
        $result = $this->findWhere([
            'user_id' => \Auth::id(),
            'lesson_id' => $lessonId
        ]);
        return $this->firstRow($result);
    }

    public function saveLesson($attributes = [], $id)
    {
        return $this->update($attributes, $id);
    }
}
