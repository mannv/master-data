<?php

namespace App\API\V1\Controllers;

use App\Repositories\CourseRepository;

class CourseFeatureController extends ApiController
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
        $result = $this->courseRepository->getCourseFeature();
        return $this->responseData($result);
    }
}
