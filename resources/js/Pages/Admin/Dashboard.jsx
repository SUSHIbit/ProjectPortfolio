import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

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
                <Card>
                    <CardHeader>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>
                            Manage your portfolio projects
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">
                            {stats.projectsCount}
                        </p>
                        <Button asChild className="mt-4 w-full">
                            <a href="/admin/projects">Manage Projects</a>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Skills</CardTitle>
                        <CardDescription>Update your skill set</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">
                            {stats.skillsCount}
                        </p>
                        <Button asChild className="mt-4 w-full">
                            <a href="/admin/skills">Manage Skills</a>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Social Links</CardTitle>
                        <CardDescription>
                            Manage your social links
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">
                            {stats.socialLinksCount}
                        </p>
                        <Button asChild className="mt-4 w-full">
                            <a href="/admin/social-links">
                                Manage Social Links
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>
                            Update your personal details
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                        <Button asChild className="w-full">
                            <a href="/admin/personal-info">
                                Edit Personal Info
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Internet Links</CardTitle>
                        <CardDescription>
                            Manage contact page links
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 mb-4">
                            <p className="text-2xl font-bold">
                                {stats.internetLinksCount}
                            </p>
                            <p>Links displayed on your contact page</p>
                        </div>
                        <Button asChild className="w-full">
                            <a href="/admin/internet-links">
                                Manage Internet Links
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
