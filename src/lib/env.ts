import { z } from "zod";

const serverSchema = z.object({
  GOOGLE_CLIENT_ID: z
    .string("GOOGLE_CLIENT_ID is required")
    .trim()
    .min(1, "GOOGLE_CLIENT_ID is required!"),

  GOOGLE_CLIENT_SECRET: z
    .string("GOOGLE_CLIENT_SECRET is required")
    .trim()
    .min(1, "GOOGLE_CLIENT_SECRET is required!"),

  GOOGLE_REFRESH_TOKEN: z
    .string("GOOGLE_REFRESH_TOKEN is required")
    .trim()
    .min(1, "GOOGLE_REFRESH_TOKEN is required!"),

  EMAIL_FROM_NAME: z
    .string("EMAIL_FROM_NAME is required")
    .trim()
    .min(1, "EMAIL_FROM_NAME is required!"),

  EMAIL_FROM: z
    .email("EMAIL_FROM is invalid!")
    .trim()
    .min(1, "EMAIL_FROM is required!"),
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
