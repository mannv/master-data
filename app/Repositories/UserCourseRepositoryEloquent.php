<?php

namespace App\Repositories;

use App\Entities\UserCourse;
use App\Presenters\UserCoursePresenter;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class UserCourseRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserCourseRepositoryEloquent extends MyRepositoryEloquent implements UserCourseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return UserCourse::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
        $this->setPresenter(app(UserCoursePresenter::class));
    }

    public function getUserCourse()
    {
        return $this->with([
            'course' => function ($query) {
                $query->withCount(['lessons']);
            }
        ])->orderBy('id', 'DESC')
            ->findWhere(['user_id' => \Auth::id()]);
    }

    public function checkRegister($courseId)
    {
        return $this->findWhere(['course_id' => $courseId, 'user_id' => \Auth::id()]);
    }

}
