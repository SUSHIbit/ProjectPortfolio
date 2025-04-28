import React from 'react';
import { Link } from '@inertiajs/react';

export const SocialLinks = ({ links }) => {
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col space-y-6">
            {links.map((link) => (
                <a 
                    key={link.id} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors"
                >
                    {link.icon.toUpperCase()}
                </a>
            ))}
        </div>
    );
};
