import React from "react";

export const SocialLinks = ({
    links,
    orientation = "vertical",
    isDarkTheme = false,
}) => {
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <div
            className={`flex ${
                orientation === "vertical"
                    ? "flex-col space-y-6"
                    : "flex-row space-x-6"
            }`}
        >
            {links.map((link) => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                        isDarkTheme
                            ? "text-zinc-200 hover:text-zinc-400"
                            : "text-zinc-800 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-400"
                    } transition-colors`}
                >
                    {link.icon.toUpperCase()}
                </a>
            ))}
        </div>
    );
};
