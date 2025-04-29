import React from "react";
import { Link } from "@inertiajs/react";
import { SocialLinks } from "@/Components/SocialLinks";

export default function PublicLayout({ children, socialLinks = [] }) {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
            {/* Header with HOME link on left and copyright on right */}
            <header className="p-4 z-10">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm tracking-wide hover:text-zinc-400 transition-colors"
                    >
                        HOME
                    </Link>

                    {/* Copyright on right always visible */}
                    <div className="text-sm tracking-wide">
                        © {new Date().getFullYear()}
                    </div>
                </div>
            </header>

            {/* Desktop social links - vertical left */}
            <div className="fixed left-10 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                <SocialLinks links={socialLinks} />
            </div>

            {/* Main content */}
            <main className="flex-grow">{children}</main>

            {/* Remove the duplicate copyright at bottom left on desktop */}
        </div>
    );
}
