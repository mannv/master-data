<?php

namespace App\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface LessonRepository.
 *
 * @package namespace App\Repositories;
 */
interface MyRepository extends RepositoryInterface
{
    public function add($attributes = []);

    public function getAll();

    public function getById($id, $with = []);

    public function getAllWithPaginate();
}
