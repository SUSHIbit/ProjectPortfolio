<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminPersonalInfoController extends Controller
{
    public function edit()
    {
        $personalInfo = PersonalInfo::first();

        return Inertia::render('Admin/PersonalInfo/Edit', [
            'personalInfo' => $personalInfo,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'short_description' => 'required|string',
            'about_description' => 'nullable|string',
            'kudos_text' => 'nullable|string',
            'contact_description' => 'nullable|string',
            'contact_email' => 'nullable|email|max:255',
        ]);

        $personalInfo = PersonalInfo::first();
        $personalInfo->update($validated);

        return redirect()->back()->with('message', 'Personal information updated successfully.');
    }

    public function uploadCV(Request $request)
    {
        $request->validate([
            'cv_file' => 'required|file|mimes:pdf,doc,docx|max:5120', // 5MB max
        ]);

        $personalInfo = PersonalInfo::first();

        // Delete old CV if exists
        if ($personalInfo->cv_file) {
            Storage::delete('public/' . $personalInfo->cv_file);
        }

        // Store new CV
        $path = $request->file('cv_file')->store('cv', 'public');
        $personalInfo->cv_file = $path;
        $personalInfo->save();

        return redirect()->back()->with('message', 'CV uploaded successfully.');
    }
}