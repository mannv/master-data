<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class MyRepositoryEloquent extends BaseRepository implements MyRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        //
    }

    public function add($attributes = [])
    {
        return $this->create($attributes);
    }

    public function getAll()
    {
        return $this->orderBy('id', 'DESC')->all();
    }

    public function getById($id, $with = [])
    {
        return $this->with($with)->find($id);
    }

    public function getAllWithPaginate()
    {
        return $this->paginate();
    }

    public function firstRow($result)
    {
        if (empty($result['data'])) {
            return null;
        }
        return array_shift($result['data']);
    }
}
