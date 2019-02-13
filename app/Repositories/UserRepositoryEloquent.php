<?php

namespace App\Repositories;

use App\Entities\User;
use App\Presenters\UserPresenter;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends MyRepositoryEloquent implements UserRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
        $this->setPresenter(app(UserPresenter::class));
    }

    public function getAllUsers()
    {
        return $this->orderBy('id', 'DESC')->all();
    }

    public function saveToken($token, $userId)
    {
        return $this->update(['user_token' => $token], $userId);
    }

    public function getUserById($id)
    {
        return $this->find($id);
    }

}
