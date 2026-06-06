import nodemailer from "nodemailer";
import { getServerEnv } from "@/lib/env";

let cachedTransport: nodemailer.Transporter | null = null;

export function getTransport() {
  if (!cachedTransport) {
    const env = getServerEnv();
    cachedTransport = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }
  return cachedTransport;
}
