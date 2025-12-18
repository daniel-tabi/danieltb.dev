import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Start Your MVP",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-12 px-8 overflow-hidden",
                "bg-transparent",
                "transition-all duration-300",
                "group",
                "hover:scale-[1.02]",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <span
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-primary via-accent to-primary",
                    "opacity-100",
                    "group-hover:opacity-90",
                    "transition-opacity duration-300"
                )}
            />

            {/* Content */}
            <span
                className={cn(
                    "relative z-10 flex items-center gap-2",
                    "text-white font-semibold"
                )}
            >
                {label}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
        </Button>
    );
}


