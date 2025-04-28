import React from "react";

export const SkillsList = ({ skills }) => {
    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill.id}
                    className="text-zinc-600 dark:text-zinc-400"
                >
                    {skill.name}
                    {" / "}
                </span>
            ))}
        </div>
    );
};
