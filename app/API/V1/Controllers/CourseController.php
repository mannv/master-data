<?php

namespace App\API\V1\Controllers;

use App\API\V1\Requests\JoinCourseRequest;
use App\Repositories\CourseRepository;
use App\Repositories\UserCourseRepository;
use Carbon\Carbon;

class CourseController extends ApiController
{
    /**
     * @var CourseRepository
     */
    private $courseRepository;

    /**
     * @var UserCourseRepository
     */
    private $userCourseRepository;

    public function __construct(CourseRepository $courseRepository, UserCourseRepository $userCourseRepository)
    {
        parent::__construct();
        $this->courseRepository = $courseRepository;
        $this->userCourseRepository = $userCourseRepository;
    }

    public function index()
    {
        $result = $this->courseRepository->getAllWithPaginate();
        return $this->responseData($result);
    }

    private function checkCourseRegistered($id)
    {
        $result = $this->userCourseRepository->checkRegister($id);
        return !empty($result['data']);
    }

    public function show($id)
    {
        $result = $this->courseRepository->getById($id, [
            'lessons' => function ($query) {
                $query->with(['lessonSave']);
            }
        ]);
        $result['data']['lessons'] = collect($result['data']['lessons'])->map(function ($item) {
            $minute = (int)($item['duration'] / 60);
            $second = $item['duration'] % 60;
            $item['duration'] = str_pad($minute, 2, '0', STR_PAD_LEFT) . ':' . str_pad($second, 2, '0', STR_PAD_LEFT);

            if(empty($item['lesson_save'])) {
                $item['lesson_save'] = ['finish' => 0, 'learn' => 0];
            } else {
                $item['lesson_save'] = ['finish' => $item['lesson_save']['is_finish'], 'learn' => 1];
            }

            return $item;
        })->all();

        $result['data']['registered'] = $this->checkCourseRegistered($id);
        return $this->responseData($result);
    }

    public function store(JoinCourseRequest $request)
    {
        $userId = \Auth::id();
        $courseId = $request->get('course_id');
        $this->userCourseRepository->add([
            'user_id' => $userId,
            'course_id' => $courseId
        ]);
        return $this->responseOk();
    }

    public function myCourse()
    {
        $result = $this->userCourseRepository->getUserCourse();
        $result['data'] = collect($result['data'])->map(function ($item) {
            $row = $item['course'];
            $row['created_at'] = Carbon::createFromFormat('Y-m-d H:i:s', $item['created_at'])->format('d/m/Y');
            return $row;
        })->all();
        return $this->responseData($result);
    }
}
