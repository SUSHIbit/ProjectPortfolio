import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
    default:
        "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80",
    outline:
        "text-zinc-950 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
    secondary:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
};

const Badge = React.forwardRef(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:focus:ring-zinc-300",
                    badgeVariants[variant] || badgeVariants.default,
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
