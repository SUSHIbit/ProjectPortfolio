import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Components/PublicLayout";
import { SkillsList } from "@/Components/SkillsList";
import { Button } from "@/Components/ui/button";

export default function About({ personalInfo, skills, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="About" />

            <div className="container mx-auto py-8 sm:py-24 px-6 sm:px-4">
                <div className="max-w-3xl mx-auto mt-4 sm:mt-0">
                    <h1 className="text-3xl sm:text-5xl font-light mb-6 sm:mb-8 text-left sm:text-center">
                        About
                    </h1>

                    <h2 className="text-xl sm:text-3xl font-light mb-4 sm:mb-6 text-left sm:text-center">
                        I'm {personalInfo.name}. A designer, maker and problem
                        solver.
                    </h2>

                    <div className="prose dark:prose-invert mb-8 sm:mb-12 text-left sm:text-center text-sm sm:text-base">
                        <p>{personalInfo.about_description}</p>
                    </div>

                    <div className="mb-8 sm:mb-12">
                        <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-left sm:text-center">
                            EXPERIENCE
                        </h3>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base text-left sm:text-center">
                            <li>- Degree in Brand Communications</li>
                            <li>
                                - 15 years experience in Digital Design, Web
                                Development, Advertising and Product Development
                            </li>
                            <li className="mt-3 sm:mt-4">
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
                        <div className="mb-8 sm:mb-12">
                            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-left sm:text-center">
                                SKILLS
                            </h3>
                            <div className="text-left sm:text-center">
                                <SkillsList skills={skills} />
                            </div>
                        </div>
                    )}

                    {personalInfo.cv_file && (
                        <div className="mb-8 sm:mb-12 flex justify-start sm:justify-center">
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
                        <div className="mb-8 sm:mb-12">
                            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-left sm:text-center">
                                KUDOS
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base text-left sm:text-center">
                                {personalInfo.kudos_text}
                            </p>
                            <p className="mt-3 sm:mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base text-left sm:text-center">
                                <a href="#" className="underline">
                                    Ahmad Zhafri
                                </a>
                                ,{" "}
                                <a href="#" className="underline">
                                    Hana Munira
                                </a>
                                ,{" "}
                                <a href="#" className="underline">
                                    Mohammad 'Azman
                                </a>
                                ,{" "}
                                <a href="#" className="underline">
                                    Norziah Johod
                                </a>
                                ,{" "}
                                <a href="#" className="underline">
                                    Rushyaidi Shahmy
                                </a>
                                ,{" "}
                                <a href="#" className="underline">
                                    Afiq Faris
                                </a>
                                ,{" "}
                                <a href="#" className="underline">
                                    Ikhwan Tukiran
                                </a>
                                . THANK YOU.
                            </p>
                        </div>
                    )}

                    <div className="mb-8 sm:mb-12 flex justify-start sm:justify-center">
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
