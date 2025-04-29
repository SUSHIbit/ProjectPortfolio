import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { SocialLinks } from "@/Components/SocialLinks";

export default function PublicLayout({
    children,
    socialLinks = [],
    isDarkTheme = false,
}) {
    // Get current route from Inertia
    const { url } = usePage();
    
    // Determine if we're on the homepage
    const isHomePage = url === '/' || url === '';
    
    return (
        <div
            className={`min-h-screen flex flex-col ${
                isDarkTheme
                    ? "bg-zinc-950 text-zinc-50"
                    : "bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
            }`}
        >
            {/* Header with HOME link on left and copyright on right */}
            <header className="max-w-7xl w-full mx-auto px-6 sm:px-10 p-4 z-10">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className={`text-sm tracking-wide hover:text-zinc-400 transition-colors ${
                            isDarkTheme ? "text-zinc-50" : ""
                        }`}
                    >
                        HOME
                    </Link>

                    {/* Copyright on right always visible */}
                    <div
                        className={`text-sm tracking-wide ${
                            isDarkTheme ? "text-zinc-50" : ""
                        }`}
                    >
                        © {new Date().getFullYear()}
                    </div>
                </div>
            </header>

            {/* Desktop social links - vertical left - only visible on homepage */}
            {isHomePage && (
                <div className="fixed left-10 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                    <SocialLinks links={socialLinks} isDarkTheme={isDarkTheme} />
                </div>
            )}

            {/* Main content */}
            <main className="flex-grow">{children}</main>
        </div>
    );
}