<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    //

    public function index()
    {
        //return 'index';
        return view('Front/Main');
    }
}
