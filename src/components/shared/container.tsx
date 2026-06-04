import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("container mx-auto px-4 md:px-8 py-2.5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
