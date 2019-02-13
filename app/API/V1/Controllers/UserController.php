<?php

namespace App\API\V1\Controllers;

use App\API\V1\Requests\LoginRequest;
use App\Repositories\UserRepository;
use GuzzleHttp\Client;

class UserController extends ApiController
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        parent::__construct();
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequest $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $checkAuth = \Auth::attempt([
            'email' => $email,
            'password' => $password
        ]);
        if (!$checkAuth) {
            return $this->responseError('Email or password incorrect');
        }

        $this->makeTokenPasswordGrant($email, $password);

        $user = $this->userRepository->getUserById(\Auth::id());
        return $this->responseData($user);
    }

    private function makeTokenPasswordGrant($email, $password)
    {
        $http = new Client();

        $response = $http->post('http://master-data.local/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => 2,
                'client_secret' => 'wEEAX645gm6SvZsSAlOLKTpCqWJUp90IuwSKEYVo',
                'username' => $email,
                'password' => $password
            ],
        ]);
        $userToken = (string)$response->getBody();
        $this->userRepository->saveToken($userToken, \Auth::id());
        return json_decode($userToken);
    }

    public function index()
    {
        $result = $this->userRepository->getAllUsers();
        return $this->responseData($result);
    }
}
