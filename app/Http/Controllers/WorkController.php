<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkController extends Controller
{
    public function index()
    {
        $projects = Project::where('active', true)
            ->orderBy('order')
            ->get();
        
        $socialLinks = SocialLink::where('active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Work', [
            'projects' => $projects,
            'socialLinks' => $socialLinks,
        ]);
    }
}
