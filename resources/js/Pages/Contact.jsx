import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Components/PublicLayout";
import { ContactLinks } from "@/Components/ContactLinks";

export default function Contact({ personalInfo, internetLinks, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="Contact" />

            <div className="flex min-h-screen items-start sm:items-center justify-center">
                <div className="max-w-md px-6 sm:px-4 pt-8 sm:pt-0 text-left sm:text-center">
                    <h1 className="text-4xl sm:text-7xl font-light mb-6 sm:mb-8">
                        Hello.
                    </h1>

                    <p className="mb-6 sm:mb-8 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                        {personalInfo.contact_description}
                    </p>

                    <div className="mb-6 sm:mb-8">
                        <p className="mb-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                            Email:
                        </p>
                        <a
                            href={`mailto:${personalInfo.contact_email}`}
                            className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors"
                        >
                            {personalInfo.contact_email}
                        </a>
                    </div>

                    {internetLinks.length > 0 && (
                        <div>
                            <p className="mb-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                                On the Internet:
                            </p>
                            <div className="flex flex-wrap gap-x-3 gap-y-2 sm:justify-center justify-start">
                                {internetLinks.map((link, index) => (
                                    <React.Fragment key={link.id}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors"
                                        >
                                            {link.platform}
                                        </a>
                                        {index < internetLinks.length - 1 && (
                                            <span className="text-zinc-400 dark:text-zinc-600">
                                                /
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
