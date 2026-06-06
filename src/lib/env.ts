import { z } from "zod";

const serverSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  CONTACT_EMAIL: z.string().email(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
});

function parseEnv<T>(schema: z.ZodSchema<T>, env: Record<string, string | undefined>): T {
  const result = schema.safeParse(env);
  if (!result.success) {
    const missing = result.error.issues
      .map((i) => i.path.join("."))
      .join(", ");
    console.error(`[env] Missing or invalid environment variables: ${missing}`);
    if (typeof window === "undefined") {
      throw new Error(`Invalid environment variables: ${missing}`);
    }
    return {} as T;
  }
  return result.data;
}

export function getServerEnv() {
  return parseEnv(serverSchema, process.env);
}

export const clientEnv = parseEnv(clientSchema, process.env);
