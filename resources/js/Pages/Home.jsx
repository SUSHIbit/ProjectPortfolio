import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Components/PublicLayout";

export default function Home({ personalInfo, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="Home" />

            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="mb-4 text-lg">{personalInfo.name}</div>
                <div className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
                    {personalInfo.role}
                </div>
                <div className="max-w-lg text-center mb-12">
                    {personalInfo.short_description}
                </div>

                <div className="space-y-12 text-center">
                    <a
                        href="/work"
                        className="block text-7xl font-light tracking-wider hover:text-zinc-400 transition-colors"
                    >
                        WORK
                    </a>
                    <a
                        href="/about"
                        className="block text-7xl font-light tracking-wider hover:text-zinc-400 transition-colors"
                    >
                        ABOUT
                    </a>
                    <a
                        href="/contact"
                        className="block text-7xl font-light tracking-wider hover:text-zinc-400 transition-colors"
                    >
                        CONTACT
                    </a>
                </div>
            </div>
        </PublicLayout>
    );
}
