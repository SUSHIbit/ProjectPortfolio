import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Alert, AlertDescription } from "@/Components/ui/alert";

export default function Projects({ projects, flash }) {
    return (
        <AdminLayout>
            <Head title="Manage Projects" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Manage Projects</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Create and manage your portfolio projects.
                    </p>
                </div>

                <Button asChild>
                    <Link href={route("admin.projects.create")}>
                        Add New Project
                    </Link>
                </Button>
            </div>

            {flash.message && (
                <Alert className="mb-6">
                    <AlertDescription>{flash.message}</AlertDescription>
                </Alert>
            )}

            <div className="grid grid-cols-1 gap-6">
                {projects.length === 0 ? (
                    <Card>
                        <CardContent className="pt-6">
                            <p className="text-center text-zinc-600 dark:text-zinc-400">
                                No projects added yet. Create your first
                                project.
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    projects.map((project) => (
                        <Card key={project.id}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription className="flex items-center mt-1">
                                            {project.type}
                                            {project.is_new && (
                                                <Badge className="ml-2">
                                                    NEW
                                                </Badge>
                                            )}
                                            {!project.active && (
                                                <Badge
                                                    variant="outline"
                                                    className="ml-2"
                                                >
                                                    Hidden
                                                </Badge>
                                            )}
                                        </CardDescription>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                        >
                                            <Link
                                                href={route(
                                                    "admin.projects.edit",
                                                    project.id
                                                )}
                                            >
                                                Edit
                                            </Link>
                                        </Button>
                                        <Link
                                            href={route(
                                                "admin.projects.destroy",
                                                project.id
                                            )}
                                            method="delete"
                                            as="button"
                                            className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded text-xs"
                                            onClick={() =>
                                                confirm(
                                                    "Are you sure you want to delete this project?"
                                                )
                                            }
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm mb-4">
                                    {project.description}
                                </div>
                                {project.url && (
                                    <div className="text-sm">
                                        <span className="font-semibold">
                                            URL:
                                        </span>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline ml-1"
                                        >
                                            {project.url}
                                        </a>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </AdminLayout>
    );
}
