<?php

namespace App\API\V1\Controllers;

use App\Repositories\CourseRepository;

class CourseController extends ApiController
{
    /**
     * @var CourseRepository
     */
    private $courseRepository;

    public function __construct(CourseRepository $courseRepository)
    {
        parent::__construct();
        $this->courseRepository = $courseRepository;
    }

    public function index()
    {
        $result = $this->courseRepository->getAllWithPaginate();
        return $this->responseData($result);
    }

    public function show($id)
    {
        $result = $this->courseRepository->getById($id, ['lessons']);
        return $this->responseData($result);
    }
}
