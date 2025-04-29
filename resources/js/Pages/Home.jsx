import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Components/PublicLayout";

export default function Home({ personalInfo, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="Home" />

            <div className="flex flex-col justify-center min-h-[80vh] px-6 mt-8 sm:mt-0 sm:items-center sm:px-4 max-w-7xl mx-auto">
                <div className="mb-4 text-lg sm:text-center text-left">
                    {personalInfo.name}
                </div>
                <div className="mb-6 text-sm text-zinc-600 dark:text-zinc-400 sm:text-center text-left">
                    {personalInfo.role}
                </div>
                <div className="max-w-lg mb-12 sm:text-center text-left">
                    {personalInfo.short_description}
                </div>

                <div className="space-y-12 text-left sm:text-center">
                    <a
                        href="/work"
                        className="block text-5xl sm:text-7xl font-light tracking-wider hover:text-zinc-400 hover:font-bold hover:italic transition-all"
                    >
                        WORK
                    </a>
                    <a
                        href="/about"
                        className="block text-5xl sm:text-7xl font-light tracking-wider hover:text-zinc-400 hover:font-bold hover:italic transition-all"
                    >
                        ABOUT
                    </a>
                    <a
                        href="/contact"
                        className="block text-5xl sm:text-7xl font-light tracking-wider hover:text-zinc-400 hover:font-bold hover:italic transition-all"
                    >
                        CONTACT
                    </a>
                </div>
            </div>
        </PublicLayout>
    );
}
