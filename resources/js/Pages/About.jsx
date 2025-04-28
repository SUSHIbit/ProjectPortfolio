import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { SkillsList } from "@/Components/SkillsList";
import { Button } from "@/Components/ui/button";

export default function About({ personalInfo, skills, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="About" />

            <div className="container mx-auto py-24 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-light mb-8">About</h1>

                    <h2 className="text-3xl font-light mb-6">
                        I'm {personalInfo.name}. A designer, maker and problem
                        solver.
                    </h2>

                    <div className="prose dark:prose-invert mb-12">
                        <p>{personalInfo.about_description}</p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl mb-4">EXPERIENCE</h3>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li>- Degree in Brand Communications</li>
                            <li>
                                - 15 years experience in Digital Design, Web
                                Development, Advertising and Product Development
                            </li>
                            <li className="mt-4">
                                Within those 15 years, I have:
                            </li>
                            <li>- 12 years experience in Web Design</li>
                            <li>- 10 years experience in Software Design</li>
                            <li>
                                - 3 years experience in Front-end Web
                                Development
                            </li>
                            <li>- 5 years experience in Webflow Development</li>
                            <li>- 1 year experience in Framer Development</li>
                            <li>- 4 years experience in Product Management</li>
                        </ul>
                    </div>

                    {skills.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-xl mb-4">SKILLS</h3>
                            <SkillsList skills={skills} />
                        </div>
                    )}

                    {personalInfo.cv_file && (
                        <div className="mb-12">
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full px-8 py-2 border-zinc-800 dark:border-zinc-200"
                            >
                                <a
                                    href={personalInfo.cv_file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    My CV
                                </a>
                            </Button>
                        </div>
                    )}

                    {personalInfo.kudos_text && (
                        <div className="mb-12">
                            <h3 className="text-xl mb-4">KUDOS</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {personalInfo.kudos_text}
                            </p>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                <a href="#" className="underline">
                                    Shawn Roos
                                </a>
                                ,
                                <a href="#" className="underline ml-1">
                                    Wayne Berry
                                </a>
                                ,
                                <a href="#" className="underline ml-1">
                                    Daniel Klopper
                                </a>
                                ,
                                <a href="#" className="underline ml-1">
                                    Michael Thorne
                                </a>
                                ,
                                <a href="#" className="underline ml-1">
                                    Kobus Brummer
                                </a>
                                ,
                                <a href="#" className="underline ml-1">
                                    Pascal Righini
                                </a>
                                ,
                                <a href="#" className="underline ml-1">
                                    Jade Scully
                                </a>
                                . THANK YOU.
                            </p>
                        </div>
                    )}

                    <div className="mb-12">
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full px-8 py-2 border-zinc-800 dark:border-zinc-200"
                        >
                            <a href="/contact">Contact me</a>
                        </Button>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
