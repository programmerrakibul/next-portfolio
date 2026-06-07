"use client";

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

type FormField = {
  name: "name" | "subject" | "email" | "message";
  label: string;
  placeholder: string;
  type: "text" | "email";
  component: typeof Input | typeof Textarea;
  rows?: number;
};

const formFields: FormField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
    component: Input,
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "What is this about?",
    type: "text",
    component: Input,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your@email.com",
    type: "email",
    component: Input,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your message...",
    type: "text",
    component: Textarea,
    rows: 6,
  },
];

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", subject: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send email!");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error: unknown) {
      toast.error((error as Error).message ?? "Something went wrong!");
    }
  };

  return (
    <>
      <MagicCard
        mode="gradient"
        gradientColor="color-mix(in oklch, var(--primary) 8%, transparent)"
        gradientFrom="var(--primary)"
        gradientTo="oklch(0.704 0.14 182.503)"
        className="border border-border/60 shadow-lg rounded-2xl p-6 md:p-8"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {formFields.map((fieldConfig) => (
            <Controller
              key={fieldConfig.name}
              name={fieldConfig.name}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={fieldConfig.name}>
                    {fieldConfig.label}
                  </FieldLabel>
                  <FieldContent>
                    <fieldConfig.component
                      id={fieldConfig.name}
                      type={fieldConfig.type}
                      rows={fieldConfig.rows}
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      aria-disabled={isSubmitting}
                      aria-errormessage={fieldState.error?.message}
                      aria-describedby={fieldState.error?.message || undefined}
                      aria-invalid={fieldState.invalid}
                      placeholder={fieldConfig.placeholder}
                      {...field}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
          ))}

          <div className="relative">
            <InteractiveHoverButton
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              aria-disabled={isSubmitting}
              aria-label="Send message"
              title="Send message"
              className="relative w-full border-primary/30 py-2.5 shadow-lg shadow-primary/15"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </InteractiveHoverButton>
          </div>
        </form>
      </MagicCard>
    </>
  );
};

export default ContactForm;
