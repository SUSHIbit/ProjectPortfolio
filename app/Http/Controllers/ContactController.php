<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfo;
use App\Models\InternetLink;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $personalInfo = PersonalInfo::first();
        $internetLinks = InternetLink::where('active', true)->orderBy('order')->get();
        $socialLinks = SocialLink::where('active', true)->orderBy('order')->get();

        return Inertia::render('Contact', [
            'personalInfo' => $personalInfo,
            'internetLinks' => $internetLinks,
            'socialLinks' => $socialLinks,
        ]);
    }
}
