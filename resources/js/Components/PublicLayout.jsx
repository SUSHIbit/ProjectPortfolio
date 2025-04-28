import React from "react";
import { Link } from "@inertiajs/react";
import { SocialLinks } from "@/Components/SocialLinks";

export default function PublicLayout({ children, socialLinks = [] }) {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
            <div className="fixed top-10 left-10 z-10">
                <Link
                    href="/"
                    className="text-sm tracking-wide hover:text-zinc-400 transition-colors"
                >
                    HOME
                </Link>
            </div>

            <div className="fixed left-10 top-1/2 transform -translate-y-1/2 z-10">
                <SocialLinks links={socialLinks} />
            </div>

            <div className="fixed bottom-10 left-10 z-10">
                <div className="text-sm tracking-wide">
                    © {new Date().getFullYear()}
                </div>
            </div>

            <main>{children}</main>
        </div>
    );
}
