import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Components/PublicLayout";
import { ProjectCard } from "@/Components/ProjectCard";

export default function Work({ projects, socialLinks }) {
    // Create a custom centered project card component that wraps the original
    const CenteredProjectCard = ({ project }) => (
        <div className="text-center">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <h2 className="text-5xl font-light mb-2 group-hover:text-zinc-400 transition-colors">
                    {project.title}
                </h2>
                <div className="flex items-center justify-center mb-2">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        - {project.type}
                    </span>
                    {project.is_new && (
                        <span className="ml-2 text-xs bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900 px-2 py-0.5 rounded-full">
                            NEW
                        </span>
                    )}
                </div>
                {project.description && (
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                        {project.description}
                    </p>
                )}
            </a>
        </div>
    );

    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="Work" />

            <div className="flex min-h-screen items-center justify-center">
                <div className="max-w-3xl px-6 py-16 text-center">
                    <h1 className="text-xl mb-6">WORK</h1>

                    <div className="mb-16">
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                            This is a showcase of my best work in a variety of
                            fields including Graphic and Web Design, No-Code
                            Development, Product Design and Product Management.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            The world of digital design and development is
                            constantly evolving and so has my role over the last
                            15 years. I'm still learning and gaining new skills
                            every day.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {projects.map((project) => (
                            <CenteredProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
