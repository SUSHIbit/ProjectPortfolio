import React from "react";

export const ContactLinks = ({ links }) => {
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {links.map((link, index) => (
                <React.Fragment key={link.id}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors"
                    >
                        {link.platform}
                    </a>
                    {index < links.length - 1 && (
                        <span className="text-zinc-400 dark:text-zinc-600">
                            /
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
