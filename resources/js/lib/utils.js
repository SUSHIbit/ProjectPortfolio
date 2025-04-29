import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export { cn };
