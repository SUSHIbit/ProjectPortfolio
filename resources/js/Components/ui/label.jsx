import * as React from "react";
import { cn } from "@/lib/utils";

// Create a custom Label component without @radix-ui dependency
const Label = React.forwardRef(
    ({ className, htmlFor, children, ...props }, ref) => {
        return (
            <label
                ref={ref}
                htmlFor={htmlFor}
                className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    "text-zinc-900 dark:text-zinc-100",
                    className
                )}
                {...props}
            >
                {children}
            </label>
        );
    }
);

Label.displayName = "Label";

export { Label };
