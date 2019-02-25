<?php

namespace App\API\V1\Controllers;

use App\API\V1\Requests\FinishLessonRequest;
use App\API\V1\Requests\StartLessonRequest;
use App\Repositories\LessonRepository;
use App\Repositories\UserLessonSaveRepository;

class LessonController extends ApiController
{
    /**
     * @var LessonRepository
     */
    private $lessonRepository;

    /**
     * @var UserLessonSaveRepository
     */
    private $userLessonSaveRepository;

    public function __construct(LessonRepository $lessonRepository, UserLessonSaveRepository $userLessonSaveRepository)
    {
        parent::__construct();
        $this->lessonRepository = $lessonRepository;
        $this->userLessonSaveRepository = $userLessonSaveRepository;
    }

    private function checkSaveLesson(&$data)
    {
        if (empty($data)) {
            $data = [
                'finish' => 0,
                'save_time' => 0,
                'learn' => 0
            ];
        } else {
            $data = [
                'finish' => $data['is_finish'],
                'save_time' => $data['save_time'],
                'learn' => 1
            ];
        }
    }

    public function show($id)
    {
        $result = $this->lessonRepository->getById($id, ['course', 'lessonSave']);
        $this->checkSaveLesson($result['data']['lesson_save']);

        return $this->responseData($result);
    }

    public function store(StartLessonRequest $request)
    {
        $userId = \Auth::id();
        $lessonId = $request->get('lesson_id');
        $result = $this->lessonRepository->getById($lessonId, ['course']);
        $courseId = $result['data']['course']['id'];
        $attributes = [
            'user_id' => $userId,
            'course_id' => $courseId,
            'lesson_id' => $lessonId,
            'save_time' => 0,
            'is_finish' => false
        ];
        $this->userLessonSaveRepository->add($attributes);
        return $this->responseOk();
    }

    public function update(FinishLessonRequest $request)
    {
        $lessonId = $request->get('lesson_id');
        $result = $this->userLessonSaveRepository->getLessonSave($lessonId);
        if (empty($result)) {
            return $this->responseError('Data not found');
        }

        $this->userLessonSaveRepository->saveLesson([
            'is_finish' => true
        ], $result['id']);
        return $this->responseOk();
    }
}
