import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Components/PublicLayout";

export default function Work({ projects, socialLinks }) {
    // Create a custom project card component for the work page
    const ProjectCard = ({ project }) => (
        <div className="mb-8 sm:text-center text-left">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <h2 className="text-4xl sm:text-5xl font-light mb-2 group-hover:text-zinc-400 group-hover:font-bold group-hover:italic transition-all">
                    {project.title}
                </h2>
                <div className="flex sm:justify-center justify-start items-center mb-2">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:dark:text-zinc-400">
                        - {project.type}
                    </span>
                    {project.is_new && (
                        <span className="ml-2 text-xs bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900 px-2 py-0.5 rounded-full">
                            NEW
                        </span>
                    )}
                </div>
                {/* Project description is only shown on desktop */}
                {project.description && (
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto hidden sm:block">
                        {project.description}
                    </p>
                )}
            </a>
        </div>
    );

    return (
        <div className="sm:bg-zinc-50 bg-zinc-950 sm:dark:bg-zinc-950 sm:text-zinc-900 text-zinc-50 sm:dark:text-zinc-50">
            <PublicLayout socialLinks={socialLinks}>
                <Head title="Work" />

                <div className="flex min-h-screen items-start sm:items-center justify-center">
                    <div className="max-w-3xl px-6 py-8 sm:py-16 sm:text-center text-left">
                        <h1 className="text-xl sm:text-2xl mb-6">WORK</h1>

                        <div className="mb-10 sm:mb-16">
                            <p className="text-sm sm:text-base text-zinc-400 sm:text-zinc-600 dark:text-zinc-400 mb-4">
                                This is a showcase of my best work in a variety
                                of fields including Graphic and Web Design,
                                No-Code Development, Product Design and Product
                                Management.
                            </p>
                            <p className="text-sm sm:text-base text-zinc-400 sm:text-zinc-600 dark:text-zinc-400">
                                The world of digital design and development is
                                constantly evolving and so has my role over the
                                last 15 years. I'm still learning and gaining
                                new skills every day.
                            </p>
                        </div>

                        <div>
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </PublicLayout>
        </div>
    );
}
