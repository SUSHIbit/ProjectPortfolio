<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfo;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SocialLink;
use App\Models\InternetLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $personalInfo = PersonalInfo::first();
        
        $stats = [
            'projectsCount' => Project::count(),
            'skillsCount' => Skill::count(),
            'socialLinksCount' => SocialLink::count(),
            'internetLinksCount' => InternetLink::count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'personalInfo' => $personalInfo,
            'stats' => $stats,
        ]);
    }
}