import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    Alert,
    AlertDescription,
    Badge,
    Card,
    CardContent,
} from "@/Components/ui";

export default function SocialLinks({ socialLinks, flash }) {
    return (
        <AdminLayout>
            <Head title="Manage Social Links" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">
                        Manage Social Links
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Add and manage the social links shown on the left side
                        of your website.
                    </p>
                </div>

                <Link
                    href={route("admin.social-links.create")}
                    className="inline-flex items-center justify-center bg-black text-white py-2 px-4 rounded-md hover:bg-zinc-800 transition-colors"
                >
                    Add New Social Link
                </Link>
            </div>

            {flash.message && (
                <Alert className="mb-6">
                    <AlertDescription>{flash.message}</AlertDescription>
                </Alert>
            )}

            <Card>
                <CardContent className="p-6">
                    {socialLinks.length === 0 ? (
                        <p className="text-center text-zinc-600 dark:text-zinc-400">
                            No social links added yet. Create your first social
                            link.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 font-semibold text-zinc-800 dark:text-zinc-200 pb-2 border-b">
                                <div className="col-span-1">Order</div>
                                <div className="col-span-2">Icon</div>
                                <div className="col-span-3">Platform</div>
                                <div className="col-span-3">URL</div>
                                <div className="col-span-1">Status</div>
                                <div className="col-span-2 text-right">
                                    Actions
                                </div>
                            </div>

                            {socialLinks.map((link) => (
                                <div
                                    key={link.id}
                                    className="grid grid-cols-12 gap-4 items-center py-2 border-b border-zinc-100 dark:border-zinc-800"
                                >
                                    <div className="col-span-1">
                                        {link.order}
                                    </div>
                                    <div className="col-span-2">
                                        {link.icon.toUpperCase()}
                                    </div>
                                    <div className="col-span-3">
                                        {link.platform}
                                    </div>
                                    <div className="col-span-3 truncate">
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
                                        <Link
                                            href={route(
                                                "admin.social-links.edit",
                                                link.id
                                            )}
                                            className="inline-flex items-center justify-center bg-white border border-zinc-200 text-zinc-950 px-3 py-1 rounded text-sm hover:bg-zinc-100 transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={route(
                                                "admin.social-links.destroy",
                                                link.id
                                            )}
                                            method="delete"
                                            as="button"
                                            className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded text-xs"
                                            onClick={() =>
                                                confirm(
                                                    "Are you sure you want to delete this social link?"
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
