import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section className={cn("py-8 md:py-12", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
