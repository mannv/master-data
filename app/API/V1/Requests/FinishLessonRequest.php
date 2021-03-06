<?php

namespace App\API\V1\Requests;

use App\API\BaseRequest;

class FinishLessonRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'lesson_id' => 'required|numeric'
        ];
    }
}
