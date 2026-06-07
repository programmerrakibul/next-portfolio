import { getServerEnv } from "@/lib/env";
import nodemailer from "nodemailer";

let cachedTransport: nodemailer.Transporter | null = null;

export function getTransport() {
  if (!cachedTransport) {
    const {
      EMAIL_FROM,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_REFRESH_TOKEN,
    } = getServerEnv();

    cachedTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL_FROM,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
      },
    });
  }
  return cachedTransport;
}
