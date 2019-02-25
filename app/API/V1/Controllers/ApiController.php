<?php

namespace App\API\V1\Controllers;

use App\Http\Controllers\Controller;
use Dingo\Api\Http\Response;
use Dingo\Api\Routing\Helpers;

class ApiController extends Controller
{
    use Helpers;
    /**
     * @var array|\Illuminate\Http\Request|string
     */
    protected $request;

    public function __construct()
    {
        $this->request = request();
    }

    protected function responseData($data = [])
    {
        app('log')->debug(var_export($data, true));

        if ($this->request->get('debug', 0) == 1) {
            return 'debug';
        }

        return new Response($data, 200);
    }

    protected function responseOk()
    {
        return $this->response->created(null, ['status' => 1]);
    }

    protected function responseError($message, $code = 404)
    {
        return $this->response->error($message, $code);
    }
}
