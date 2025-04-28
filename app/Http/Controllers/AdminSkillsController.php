<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSkillsController extends Controller
{
    public function index()
    {
        $skills = Skill::orderBy('order')->get();

        return Inertia::render('Admin/Skills/Index', [
            'skills' => $skills,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Skills/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'order' => 'integer',
        ]);

        Skill::create($validated);

        return redirect()->route('admin.skills.index')->with('message', 'Skill created successfully.');
    }

    public function edit(Skill $skill)
    {
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill,
        ]);
    }

    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'order' => 'integer',
        ]);

        $skill->update($validated);

        return redirect()->route('admin.skills.index')->with('message', 'Skill updated successfully.');
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();

        return redirect()->route('admin.skills.index')->with('message', 'Skill deleted successfully.');
    }
}
