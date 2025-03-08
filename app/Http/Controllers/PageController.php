<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    //the home page controller
    public function index(Request $request): Response
    {
        return Inertia::render('main/index');
    }

    //this is the about page
    public function about(Request $request): Response
    {
        return Inertia::render('main/about');
    }
    public function services(Request $request): Response
    {
        return Inertia::render('main/services');
    }

    public function contact(Request $request): Response
    {
        return Inertia::render('main/contact');
    }
}
