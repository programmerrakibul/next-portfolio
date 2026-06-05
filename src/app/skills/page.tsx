import Container from "@/components/shared/container";
import Section from "@/components/shared/section";

const SkillsPage = () => {
  return (
    <Section className="min-h-dvh pt-32">
      <Container>
        <p className="text-sm font-medium uppercase text-primary">Skills</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
          Dummy skill matrix
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Use this page for frameworks, tooling, workflow strengths, and stack
          confidence levels.
        </p>
      </Container>
    </Section>
  );
};

export default SkillsPage;
