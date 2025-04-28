<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfo;
use App\Models\Skill;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $personalInfo = PersonalInfo::first();
        $skills = Skill::orderBy('order')->get();
        $socialLinks = SocialLink::where('active', true)->orderBy('order')->get();

        return Inertia::render('About', [
            'personalInfo' => $personalInfo,
            'skills' => $skills,
            'socialLinks' => $socialLinks,
        ]);
    }
}