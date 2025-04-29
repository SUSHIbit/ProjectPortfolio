import * as React from "react";
import { cn } from "@/lib/utils";

// Create a custom Checkbox component without @radix-ui dependency
const Checkbox = React.forwardRef(
    ({ className, checked, onCheckedChange, ...props }, ref) => {
        // Use internal state if not controlled externally
        const [internalChecked, setInternalChecked] = React.useState(
            checked || false
        );

        // Handle changes and propagate to parent if callback provided
        const handleChange = (e) => {
            const newValue = e.target.checked;
            setInternalChecked(newValue);
            if (onCheckedChange) {
                onCheckedChange(newValue);
            }
        };

        // Use the controlled value if provided, otherwise use internal state
        const isChecked = checked !== undefined ? checked : internalChecked;

        return (
            <div className="flex items-center">
                <input
                    ref={ref}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                    className={cn(
                        "h-4 w-4 rounded border border-zinc-300 text-black focus:ring-zinc-950",
                        "bg-white transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2",
                        "peer h-4 w-4 shrink-0 rounded-sm border",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        isChecked && "bg-zinc-900 text-zinc-50",
                        className
                    )}
                    {...props}
                />
            </div>
        );
    }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
