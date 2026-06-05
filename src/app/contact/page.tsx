import Container from "@/components/shared/container";
import Section from "@/components/shared/section";

const ContactPage = () => {
  return (
    <Section className="min-h-dvh pt-32">
      <Container>
        <p className="text-sm font-medium uppercase text-primary">Contact</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
          Dummy contact section
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Add your preferred contact method, availability, and response
          expectations here.
        </p>
      </Container>
    </Section>
  );
};

export default ContactPage;
