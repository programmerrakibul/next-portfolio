import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { Skeleton } from "@/components/ui/skeleton";

function ProjectCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-5 w-3/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex flex-wrap gap-1.5 pt-1">
          <Skeleton className="h-5 w-16 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-14 rounded-md" />
        </div>
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-9 w-16 rounded-lg" />
          <Skeleton className="h-9 w-16 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

const ProjectsPageLoading = () => {
  return (
    <Section className="min-h-dvh pt-32 pb-20 md:pb-28">
      <Container>
        <div className="mb-14 space-y-4 md:mb-18">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-72 md:h-14 md:w-96" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsPageLoading;
