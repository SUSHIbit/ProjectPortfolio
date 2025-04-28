<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfo;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $personalInfo = PersonalInfo::first();
        $socialLinks = SocialLink::where('active', true)->orderBy('order')->get();

        return Inertia::render('Home', [
            'personalInfo' => $personalInfo,
            'socialLinks' => $socialLinks,
        ]);
    }
}