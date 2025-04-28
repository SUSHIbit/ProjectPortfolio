import React from "react";

export const ProjectCard = ({ project }) => {
    return (
        <div className="mb-12">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <h2 className="text-5xl font-light mb-2 group-hover:text-zinc-400 transition-colors">
                    {project.title}
                </h2>
                <div className="flex items-center mb-2">
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
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                        {project.description}
                    </p>
                )}
            </a>
        </div>
    );
};
