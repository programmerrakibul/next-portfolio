import Container from "@/components/shared/container";
import Section from "@/components/shared/section";

const AboutPage = () => {
  return (
    <Section className="min-h-dvh pt-32">
      <Container>
        <p className="text-sm font-medium uppercase text-primary">About</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
          Dummy about section
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Replace this with your story, experience, and the kind of work you
          want clients or teams to understand first.
        </p>
      </Container>
    </Section>
  );
};

export default AboutPage;
