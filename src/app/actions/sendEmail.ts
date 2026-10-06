"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  senderEmail: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Validate form inputs
  const validation = contactSchema.safeParse({
    senderEmail,
    message,
  });

  if (!validation.success) {
    const errorMessage = validation.error.issues[0]?.message || "Invalid input data";
    return { error: errorMessage };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["phjosephkn@gmail.com"], // Replace with your exact Resend account email
      replyTo: validation.data.senderEmail,
      subject: `New Portfolio Message from ${validation.data.senderEmail}`,
      text: validation.data.message,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Error:", error);
    return { error: "Something went wrong while sending your message. Please try again." };
  }
}