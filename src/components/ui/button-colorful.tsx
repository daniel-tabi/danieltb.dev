import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

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
                "h-14 px-10 text-lg rounded-xl",
                "bg-foreground text-background",
                "hover:bg-foreground/90",
                "transition-all duration-300",
                "group",
                "hover:scale-[1.02]",
                className
            )}
            {...props}
        >
            <span className="flex items-center gap-3 font-semibold">
                <Sparkles className="w-5 h-5" />
                {label}
            </span>
        </Button>
    );
}


