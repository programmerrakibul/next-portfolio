import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type { ContactFormData } from "@/lib/validations/contact";

interface ContactEmailProps extends ContactFormData {}

const primary = "#14b8a6";
const primaryDark = "#0d9488";
const foreground = "#1a1a2e";
const mutedForeground = "#64748b";
const border = "#e2e8f0";
const background = "#ffffff";

export function ContactEmail({ name, subject, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}: {subject}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-140 rounded-xl border border-solid border-[#e2e8f0] p-8 shadow-sm">
            <Section>
              <Heading className="m-0 text-2xl font-semibold tracking-tight text-[#1a1a2e]">
                New Contact Message
              </Heading>
              <Text className="mt-1 text-sm text-[#64748b]">
                You received a new message from your portfolio contact form.
              </Text>
            </Section>

            <Hr className="my-6 border-[#e2e8f0]" />

            <Section className="mb-6">
              <DetailRow label="Name" value={name} />
              <DetailRow label="Email" value={email} />
              <DetailRow label="Subject" value={subject} />
            </Section>

            <Section className="mb-6 rounded-lg border border-solid border-[#e2e8f0] bg-[#f8fafc] p-4">
              <Text className="m-0 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                Message
              </Text>
              <Text className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[#1a1a2e]">
                {message}
              </Text>
            </Section>

            <Hr className="my-6 border-[#e2e8f0]" />

            <Section className="text-center">
              <Link
                href={`mailto:${email}`}
                className="inline-block rounded-lg bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-white no-underline"
              >
                Reply to {name}
              </Link>
            </Section>

            <Text className="mt-6 text-center text-xs text-[#64748b]">
              This email was sent from your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3 flex items-baseline">
      <span className="min-w-20 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
        {label}
      </span>
      <span className="text-sm font-medium text-[#1a1a2e]">{value}</span>
    </div>
  );
}

export default ContactEmail;
