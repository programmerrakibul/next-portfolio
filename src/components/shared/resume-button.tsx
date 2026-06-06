import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";
import { ShimmerButton } from "../ui/shimmer-button";

interface ResumeButtonProps {
  className?: string;
}

const ResumeButton = ({ className }: ResumeButtonProps) => {
  const FILE_ID = "1bGZvYnbQUxohwmJiug-NPv4gzws5Ja1K";
  const DIRECT_DOWNLOAD_URL = `https://docs.google.com/uc?export=download&id=${FILE_ID}`;

  return (
    <>
      <ShimmerButton
        type="button"
        aria-label="Download resume"
        shimmerColor="color-mix(in oklch, var(--primary), white 35%)"
        background="color-mix(in oklch, var(--background), var(--foreground) 8%)"
        className={cn(
          "relative border-border/60 px-5 py-2 text-sm font-semibold text-foreground shadow-[0_0_28px_color-mix(in_oklch,var(--primary),transparent_72%)] gap-2",
          className,
        )}
        onClick={() => {
          window.open(DIRECT_DOWNLOAD_URL, "_blank");
        }}
      >
        <Download
          size={16}
          className="animate-bounce duration-300 transition-all"
        />
        Resume
        <BorderBeam
          size={48}
          duration={4.8}
          colorFrom="var(--primary)"
          colorTo="color-mix(in oklch, var(--primary), white 40%)"
        />
      </ShimmerButton>
    </>
  );
};

export default ResumeButton;
