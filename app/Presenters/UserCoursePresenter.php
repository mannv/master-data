<?php

namespace App\Presenters;

use App\Transformers\UserCourseTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class UserCoursePresenter.
 *
 * @package namespace App\Presenters;
 */
class UserCoursePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new UserCourseTransformer();
    }
}
