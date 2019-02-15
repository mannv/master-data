<?php

namespace App\Repositories;

use App\Entities\Course;
use App\Presenters\CoursePresenter;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class CourseRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class CourseRepositoryEloquent extends MyRepositoryEloquent implements CourseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Course::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
        $this->setPresenter(app(CoursePresenter::class));
    }

}
