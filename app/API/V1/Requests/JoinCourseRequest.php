<?php

namespace App\API\V1\Requests;

use App\API\BaseRequest;

class JoinCourseRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'course_id' => 'required|numeric'
        ];
    }
}
