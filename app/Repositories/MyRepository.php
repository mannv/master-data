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
}
