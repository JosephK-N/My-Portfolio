"use client";

import React, { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm() {
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    const result = await sendEmail(formData);

    if (result?.error) {
      setStatus({ message: result.error, isError: true });
    } else {
      setStatus({ message: "Message sent! I'll respond to you, THANK YOU!.", isError: false });
    }

    setIsSubmitting(false);
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          name="senderEmail"
          required
          placeholder="Enter your email here..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Enter your message here..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition duration-200 text-sm cursor-pointer"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <div
          className={`p-3 rounded-lg text-xs font-medium text-center border ${
            status.isError
              ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
              : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}