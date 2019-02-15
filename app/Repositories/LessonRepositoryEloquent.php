<?php

namespace App\Repositories;

use App\Entities\Lesson;
use App\Presenters\LessonPresenter;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class LessonRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class LessonRepositoryEloquent extends MyRepositoryEloquent implements LessonRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Lesson::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
        $this->setPresenter(app(LessonPresenter::class));
    }

}
