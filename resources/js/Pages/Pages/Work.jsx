import React from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { ProjectCard } from "@/Components/ProjectCard";

export default function Work({ projects, socialLinks }) {
    return (
        <PublicLayout socialLinks={socialLinks}>
            <Head title="Work" />

            <div className="flex min-h-screen">
                <div className="w-full md:w-1/3 p-16">
                    <h1 className="text-xl mb-6">WORK</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        This is a showcase of my best work in a variety of
                        fields including Graphic and Web Design, No-Code
                        Development, Product Design and Product Management.
                    </p>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                        The world of digital design and development is
                        constantly evolving and so has my role over the last 15
                        years. I'm still learning and gaining new skills every
                        day.
                    </p>
                </div>

                <div className="hidden md:block md:w-2/3 p-16">
                    <div className="space-y-16">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile view for projects (shown below the description on small screens) */}
            <div className="block md:hidden p-6">
                <div className="space-y-16">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
