import React from "react";
import { cn } from "@/lib/utils";

// A simple Select trigger component
const SelectTrigger = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
                    className
                )}
                {...props}
            >
                {children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-50"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </div>
        );
    }
);
SelectTrigger.displayName = "SelectTrigger";

// A simple Select value display component
const SelectValue = React.forwardRef(
    ({ className, placeholder, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn("block truncate", className)}
                {...props}
            >
                {props.children || placeholder}
            </span>
        );
    }
);
SelectValue.displayName = "SelectValue";

// A simple Select content/dropdown component
const SelectContent = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200",
                    "bg-white text-zinc-950 shadow-md",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
                    className
                )}
                {...props}
            >
                <div className="p-1">{children}</div>
            </div>
        );
    }
);
SelectContent.displayName = "SelectContent";

// A simple Select item component
const SelectItem = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                    "focus:bg-zinc-100 focus:text-zinc-900",
                    "dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
SelectItem.displayName = "SelectItem";

// The main Select component
const Select = React.forwardRef(
    ({ children, onValueChange, defaultValue, value, ...props }, ref) => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [selectedValue, setSelectedValue] = React.useState(
            value || defaultValue || ""
        );
        const containerRef = React.useRef(null);

        // Handle value changes
        React.useEffect(() => {
            if (value !== undefined) {
                setSelectedValue(value);
            }
        }, [value]);

        // Handle dropdown toggle
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        // Handle item selection
        const handleSelect = (value) => {
            setSelectedValue(value);
            if (onValueChange) {
                onValueChange(value);
            }
            setIsOpen(false);
        };

        // Close dropdown when clicking outside
        React.useEffect(() => {
            const handleClickOutside = (event) => {
                if (
                    containerRef.current &&
                    !containerRef.current.contains(event.target)
                ) {
                    setIsOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

        // Clone and modify children to add necessary props
        const enhancedChildren = React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;

            // Handle SelectTrigger
            if (child.type.displayName === "SelectTrigger") {
                return React.cloneElement(child, {
                    onClick: toggleDropdown,
                });
            }

            // Handle SelectContent
            if (child.type.displayName === "SelectContent" && isOpen) {
                // Find SelectItems within content and add select functionality
                const contentChildren = React.Children.map(
                    child.props.children,
                    (contentChild) => {
                        if (!React.isValidElement(contentChild))
                            return contentChild;

                        if (contentChild.type.displayName === "SelectItem") {
                            return React.cloneElement(contentChild, {
                                onClick: () =>
                                    handleSelect(contentChild.props.value),
                                className: cn(
                                    contentChild.props.className,
                                    contentChild.props.value ===
                                        selectedValue &&
                                        "bg-zinc-100 dark:bg-zinc-800"
                                ),
                            });
                        }

                        return contentChild;
                    }
                );

                return React.cloneElement(child, {}, contentChildren);
            }

            // Don't show content when closed
            if (child.type.displayName === "SelectContent" && !isOpen) {
                return null;
            }

            return child;
        });

        return (
            <div ref={containerRef} className="relative" {...props}>
                {enhancedChildren}
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
