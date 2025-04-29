import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ personalInfo, stats }) {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Manage your portfolio content from here.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">Projects</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        Manage your portfolio projects
                    </p>
                    <p className="text-2xl font-bold mb-4">
                        {stats.projectsCount}
                    </p>
                    <Link
                        href="/admin/projects"
                        className="block w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        Manage Projects
                    </Link>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">Skills</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        Update your skill set
                    </p>
                    <p className="text-2xl font-bold mb-4">
                        {stats.skillsCount}
                    </p>
                    <Link
                        href="/admin/skills"
                        className="block w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        Manage Skills
                    </Link>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">Social Links</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        Manage your social links
                    </p>
                    <p className="text-2xl font-bold mb-4">
                        {stats.socialLinksCount}
                    </p>
                    <Link
                        href="/admin/social-links"
                        className="block w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        Manage Social Links
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">
                        Personal Information
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        Update your personal details
                    </p>
                    <div className="space-y-2 mb-4">
                        <div>
                            <span className="font-semibold">Name:</span>{" "}
                            {personalInfo.name}
                        </div>
                        <div>
                            <span className="font-semibold">Role:</span>{" "}
                            {personalInfo.role}
                        </div>
                        <div>
                            <span className="font-semibold">Email:</span>{" "}
                            {personalInfo.contact_email}
                        </div>
                    </div>
                    <Link
                        href="/admin/personal-info"
                        className="block w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        Edit Personal Info
                    </Link>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">
                        Internet Links
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        Manage contact page links
                    </p>
                    <div className="space-y-2 mb-4">
                        <p className="text-2xl font-bold">
                            {stats.internetLinksCount}
                        </p>
                        <p>Links displayed on your contact page</p>
                    </div>
                    <Link
                        href="/admin/internet-links"
                        className="block w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        Manage Internet Links
                    </Link>
                </div>
            </div>
        </AdminLayout>
    );
}
