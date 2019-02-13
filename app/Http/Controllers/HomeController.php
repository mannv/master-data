<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;

class HomeController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->middleware('auth');
        $this->userRepository = $userRepository;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = $this->userRepository->getAllUsers();
        echo '<pre>'. print_r($users, TRUE) .'</pre>';
        die;
    }
}
