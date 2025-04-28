import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Alert, AlertDescription } from "@/Components/ui/alert";
import { Badge } from "@/Components/ui/badge";

export default function InternetLinks({ internetLinks, flash }) {
    return (
        <AdminLayout>
            <Head title="Manage Internet Links" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">
                        Manage Internet Links
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Add and manage the internet links shown on your contact
                        page.
                    </p>
                </div>

                <Button asChild>
                    <Link href={route("admin.internet-links.create")}>
                        Add New Internet Link
                    </Link>
                </Button>
            </div>

            {flash.message && (
                <Alert className="mb-6">
                    <AlertDescription>{flash.message}</AlertDescription>
                </Alert>
            )}

            <Card>
                <CardContent className="p-6">
                    {internetLinks.length === 0 ? (
                        <p className="text-center text-zinc-600 dark:text-zinc-400">
                            No internet links added yet. Create your first
                            internet link.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 font-semibold text-zinc-800 dark:text-zinc-200 pb-2 border-b">
                                <div className="col-span-1">Order</div>
                                <div className="col-span-3">Platform</div>
                                <div className="col-span-5">URL</div>
                                <div className="col-span-1">Status</div>
                                <div className="col-span-2 text-right">
                                    Actions
                                </div>
                            </div>

                            {internetLinks.map((link) => (
                                <div
                                    key={link.id}
                                    className="grid grid-cols-12 gap-4 items-center py-2 border-b border-zinc-100 dark:border-zinc-800"
                                >
                                    <div className="col-span-1">
                                        {link.order}
                                    </div>
                                    <div className="col-span-3">
                                        {link.platform}
                                    </div>
                                    <div className="col-span-5 truncate">
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {link.url}
                                        </a>
                                    </div>
                                    <div className="col-span-1">
                                        {link.active ? (
                                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                                Active
                                            </Badge>
                                        ) : (
                                            <Badge
                                                variant="outline"
                                                className="text-zinc-500"
                                            >
                                                Hidden
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="col-span-2 flex justify-end space-x-2">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                        >
                                            <Link
                                                href={route(
                                                    "admin.internet-links.edit",
                                                    link.id
                                                )}
                                            >
                                                Edit
                                            </Link>
                                        </Button>
                                        <Link
                                            href={route(
                                                "admin.internet-links.destroy",
                                                link.id
                                            )}
                                            method="delete"
                                            as="button"
                                            className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded text-xs"
                                            onClick={() =>
                                                confirm(
                                                    "Are you sure you want to delete this internet link?"
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
