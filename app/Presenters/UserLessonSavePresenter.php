<?php

namespace App\Presenters;

use App\Transformers\UserLessonSaveTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class UserLessonSavePresenter.
 *
 * @package namespace App\Presenters;
 */
class UserLessonSavePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new UserLessonSaveTransformer();
    }
}
