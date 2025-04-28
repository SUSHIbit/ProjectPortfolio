import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { ContactLinks } from "@/Components/ContactLinks";

export default function Contact({ personalInfo, internetLinks, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="Contact" />

            <div className="flex min-h-screen items-center justify-center">
                <div className="max-w-md text-center px-4">
                    <h1 className="text-7xl font-light mb-8">Hello.</h1>

                    <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                        {personalInfo.contact_description}
                    </p>

                    <div className="mb-8">
                        <p className="mb-2 text-zinc-600 dark:text-zinc-400">
                            Email:
                        </p>
                        <a
                            href={`mailto:${personalInfo.contact_email}`}
                            className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors"
                        >
                            {personalInfo.contact_email}
                        </a>
                    </div>

                    {internetLinks.length > 0 && (
                        <div>
                            <p className="mb-2 text-zinc-600 dark:text-zinc-400">
                                On the Internet:
                            </p>
                            <ContactLinks links={internetLinks} />
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
