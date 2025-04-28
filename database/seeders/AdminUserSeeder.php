<?php
// database/seeders/AdminUserSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\PersonalInfo;
use App\Models\SocialLink;
use App\Models\Project;
use App\Models\Skill;
use App\Models\InternetLink;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin',
            'email' => 'ariefsushi1@gmail.com',
            'password' => Hash::make('123456789'),
        ]);
        
        // Create initial personal info
        PersonalInfo::create([
            'name' => 'Your Name',
            'role' => 'Product Designer / Developer',
            'short_description' => 'A brief introduction about yourself.',
            'about_description' => 'The cusp of art and technology has always fascinated me and I\'ve never been afraid to just jump in and give it a go, whether it\'s Paint, Photoshop, Sketch or CSS. I\'ve been designing with computers since the day I first opened Microsoft Paint.',
            'contact_description' => 'Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.',
            'contact_email' => 'your.email@example.com',
            'kudos_text' => 'Most of what is in this portfolio is team work, it\'s very rare these days to make anything great all on your own. I have only included work that I had a large contribution to, but whether it\'s design, ideas, UX, process, engineering, mentorship, advice or creative direction, the following people have influenced my growth and career path in a massive way.',
        ]);
        
        // Add some initial social links
        $socialLinks = [
            [
                'platform' => 'LinkedIn',
                'icon' => 'li',
                'url' => 'https://linkedin.com/in/yourprofile',
                'order' => 1,
                'active' => true,
            ],
            [
                'platform' => 'Twitter',
                'icon' => 'tw',
                'url' => 'https://twitter.com/yourprofile',
                'order' => 2,
                'active' => true,
            ],
            [
                'platform' => 'Dribbble',
                'icon' => 'dr',
                'url' => 'https://dribbble.com/yourprofile',
                'order' => 3,
                'active' => true,
            ],
        ];
        
        foreach ($socialLinks as $link) {
            SocialLink::create($link);
        }

        // Add sample projects
        $projects = [
            [
                'title' => 'OKALPHA',
                'type' => 'WEBFLOW DEVELOPMENT',
                'description' => 'A modern website built with Webflow for a design agency.',
                'url' => 'https://example.com/project1',
                'is_new' => false,
                'order' => 1,
                'active' => true,
            ],
            [
                'title' => 'SUPERLINK',
                'type' => 'FRAMER DEVELOPMENT',
                'description' => 'A link shortener app built with Framer.',
                'url' => 'https://example.com/project2',
                'is_new' => true,
                'order' => 2,
                'active' => true,
            ],
            [
                'title' => 'KAROO',
                'type' => 'WEBFLOW DEVELOPMENT',
                'description' => 'An e-commerce site built with Webflow.',
                'url' => 'https://example.com/project3',
                'is_new' => true,
                'order' => 3,
                'active' => true,
            ],
            [
                'title' => 'WARD',
                'type' => 'WEBFLOW DEVELOPMENT',
                'description' => 'A healthcare website built with Webflow.',
                'url' => 'https://example.com/project4',
                'is_new' => false,
                'order' => 4,
                'active' => true,
            ],
            [
                'title' => 'STUDIO',
                'type' => 'PRODUCT MANAGEMENT',
                'description' => 'A product management tool designed for creative teams.',
                'url' => 'https://example.com/project5',
                'is_new' => false,
                'order' => 5,
                'active' => true,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // Add sample skills
        $skills = [
            ['name' => 'UI/UX Design', 'order' => 1],
            ['name' => 'Strategy', 'order' => 2],
            ['name' => 'Product Management', 'order' => 3],
            ['name' => 'User Research', 'order' => 4],
            ['name' => 'Agile Methodologies', 'order' => 5],
            ['name' => 'Collaboration', 'order' => 6],
            ['name' => 'Design Sprints', 'order' => 7],
            ['name' => 'Design Systems', 'order' => 8],
            ['name' => 'HTML and CSS', 'order' => 9],
            ['name' => 'CMS Design & Architecture', 'order' => 10],
            ['name' => 'Webflow Development', 'order' => 11],
            ['name' => 'Framer Development', 'order' => 12],
            ['name' => 'Photography', 'order' => 13],
            ['name' => 'Graphic Design', 'order' => 14],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        // Add sample internet links
        $internetLinks = [
            [
                'platform' => 'LinkedIn',
                'url' => 'https://linkedin.com/in/yourprofile',
                'order' => 1,
                'active' => true,
            ],
            [
                'platform' => 'Dribbble',
                'url' => 'https://dribbble.com/yourprofile',
                'order' => 2,
                'active' => true,
            ],
            [
                'platform' => 'Twitter',
                'url' => 'https://twitter.com/yourprofile',
                'order' => 3,
                'active' => true,
            ],
            [
                'platform' => 'Github',
                'url' => 'https://github.com/yourprofile',
                'order' => 4,
                'active' => true,
            ],
        ];

        foreach ($internetLinks as $link) {
            InternetLink::create($link);
        }
    }
}