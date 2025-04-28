<?php

namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSocialLinksController extends Controller
{
    public function index()
    {
        $socialLinks = SocialLink::orderBy('order')->get();

        return Inertia::render('Admin/SocialLinks/Index', [
            'socialLinks' => $socialLinks,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/SocialLinks/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'url' => 'required|url|max:255',
            'order' => 'integer',
            'active' => 'boolean',
        ]);

        SocialLink::create($validated);

        return redirect()->route('admin.social-links.index')->with('message', 'Social link created successfully.');
    }

    public function edit(SocialLink $socialLink)
    {
        return Inertia::render('Admin/SocialLinks/Edit', [
            'socialLink' => $socialLink,
        ]);
    }

    public function update(Request $request, SocialLink $socialLink)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'url' => 'required|url|max:255',
            'order' => 'integer',
            'active' => 'boolean',
        ]);

        $socialLink->update($validated);

        return redirect()->route('admin.social-links.index')->with('message', 'Social link updated successfully.');
    }

    public function destroy(SocialLink $socialLink)
    {
        $socialLink->delete();

        return redirect()->route('admin.social-links.index')->with('message', 'Social link deleted successfully.');
    }
}
