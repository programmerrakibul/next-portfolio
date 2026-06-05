import { cn } from "@/lib/utils";
import * as React from "react";

const Section = React.forwardRef<HTMLElement, React.ComponentProps<"section">>(
  ({ children, className, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-8 md:py-12", className)} {...props}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
