<?php

namespace App\Transformers;

use Illuminate\Database\Eloquent\Model;

/**
 * Class UserTransformer.
 *
 * @package namespace App\Transformers;
 */
class UserTransformer extends BaseTransformer
{
    public function transform(Model $model)
    {
        $attribute = parent::transform($model);
        if (empty($attribute['user_token'])) {
            $attribute['user_token'] = [
                'token_type' => 'Bearer',
                'expires_in' => 0,
                'access_token' => '',
                'refresh_token' => ''
            ];
        } else {
            $attribute['user_token'] = json_decode($attribute['user_token']);
        }
        return $attribute;
    }
}
