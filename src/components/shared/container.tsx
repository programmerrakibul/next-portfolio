import { cn } from "@/lib/utils";
import * as React from "react";

const Container = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full container px-4 md:px-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export default Container;
