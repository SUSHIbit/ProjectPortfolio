<?php

namespace App\Http\Controllers;

use App\Models\InternetLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminInternetLinksController extends Controller
{
    public function index()
    {
        $internetLinks = InternetLink::orderBy('order')->get();

        return Inertia::render('Admin/InternetLinks/Index', [
            'internetLinks' => $internetLinks,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/InternetLinks/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|url|max:255',
            'order' => 'integer',
            'active' => 'boolean',
        ]);

        InternetLink::create($validated);

        return redirect()->route('admin.internet-links.index')->with('message', 'Internet link created successfully.');
    }

    public function edit(InternetLink $internetLink)
    {
        return Inertia::render('Admin/InternetLinks/Edit', [
            'internetLink' => $internetLink,
        ]);
    }

    public function update(Request $request, InternetLink $internetLink)
    {
        $validated = $request->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|url|max:255',
            'order' => 'integer',
            'active' => 'boolean',
        ]);

        $internetLink->update($validated);

        return redirect()->route('admin.internet-links.index')->with('message', 'Internet link updated successfully.');
    }

    public function destroy(InternetLink $internetLink)
    {
        $internetLink->delete();

        return redirect()->route('admin.internet-links.index')->with('message', 'Internet link deleted successfully.');
    }
}