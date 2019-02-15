<?php

namespace App\API\V1\Controllers;

use App\Repositories\LessonRepository;

class LessonController extends ApiController
{
    /**
     * @var LessonRepository
     */
    private $lessonRepository;

    public function __construct(LessonRepository $lessonRepository)
    {
        parent::__construct();
        $this->lessonRepository = $lessonRepository;
    }

    public function show($id)
    {
        $result = $this->lessonRepository->getById($id, ['course']);
        return $this->responseData($result);
    }
}
