import React from "react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
            <nav className="bg-zinc-800 dark:bg-zinc-950 text-zinc-100 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <Link href="/admin" className="text-xl font-semibold">
                            Admin Dashboard
                        </Link>
                        <div className="hidden sm:flex space-x-4">
                            <Link
                                href="/admin/personal-info"
                                className="hover:text-zinc-300 transition-colors"
                            >
                                Personal Info
                            </Link>
                            <Link
                                href="/admin/projects"
                                className="hover:text-zinc-300 transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/admin/skills"
                                className="hover:text-zinc-300 transition-colors"
                            >
                                Skills
                            </Link>
                            <Link
                                href="/admin/social-links"
                                className="hover:text-zinc-300 transition-colors"
                            >
                                Social Links
                            </Link>
                            <Link
                                href="/admin/internet-links"
                                className="hover:text-zinc-300 transition-colors"
                            >
                                Internet Links
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="text-sm hover:text-zinc-300 transition-colors"
                        >
                            View Site
                        </Link>
                        <Link
                            href="/admin/logout"
                            method="post"
                            as="button"
                            className="text-sm hover:text-zinc-300 transition-colors"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto py-6 px-4">{children}</main>
        </div>
    );
}
