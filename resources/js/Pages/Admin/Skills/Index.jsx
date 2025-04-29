import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Alert, AlertDescription, Card, CardContent } from "@/Components/ui";

export default function Skills({ skills, flash }) {
    return (
        <AdminLayout>
            <Head title="Manage Skills" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Manage Skills</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Add and manage your skills shown on the About page.
                    </p>
                </div>

                <Link
                    href={route("admin.skills.create")}
                    className="inline-flex items-center justify-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                >
                    Add New Skill
                </Link>
            </div>

            {flash.message && (
                <Alert className="mb-6">
                    <AlertDescription>{flash.message}</AlertDescription>
                </Alert>
            )}

            <Card>
                <CardContent className="p-6">
                    {skills.length === 0 ? (
                        <p className="text-center text-zinc-600 dark:text-zinc-400">
                            No skills added yet. Create your first skill.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 font-semibold text-zinc-800 dark:text-zinc-200 pb-2 border-b">
                                <div className="col-span-1">Order</div>
                                <div className="col-span-8">Skill Name</div>
                                <div className="col-span-3 text-right">
                                    Actions
                                </div>
                            </div>

                            {skills.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="grid grid-cols-12 gap-4 items-center py-2 border-b border-zinc-100 dark:border-zinc-800"
                                >
                                    <div className="col-span-1">
                                        {skill.order}
                                    </div>
                                    <div className="col-span-8">
                                        {skill.name}
                                    </div>
                                    <div className="col-span-3 flex justify-end space-x-2">
                                        <Link
                                            href={route(
                                                "admin.skills.edit",
                                                skill.id
                                            )}
                                            className="inline-flex items-center justify-center bg-white border border-zinc-200 text-zinc-950 px-3 py-1 rounded text-sm hover:bg-zinc-100 transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={route(
                                                "admin.skills.destroy",
                                                skill.id
                                            )}
                                            method="delete"
                                            as="button"
                                            className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded text-xs"
                                            onClick={() =>
                                                confirm(
                                                    "Are you sure you want to delete this skill?"
                                                )
                                            }
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
