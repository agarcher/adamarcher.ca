"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      emailjs.init({
        publicKey: "AwrhVwge4tHWpXf2H",
        blockHeadless: true,
      });

      await emailjs.send("service_8f6ai5e", "template_iuutzrd", {
        from_name: formData.get("name"),
        message: formData.get("message"),
        from_email: formData.get("email"),
      });

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      >
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4 transition-colors duration-300">
            Message Sent!
          </h2>
          <p className="text-muted-foreground transition-colors duration-300">
            Thank you for reaching out. I'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl text-center mb-8 transition-colors duration-300">
          Contact
        </h2>
        {submitStatus === "error" && (
          <div className="mb-6 p-4 rounded-md bg-destructive text-foreground transition-colors duration-300">
            <p>Something went wrong while sending your message.</p>
            <p>
              Please try again or email me directly at{" "}
              <a href="mailto:adam@adamarcher.ca" className="underline">
                adam@adamarcher.ca
              </a>
            </p>
          </div>
        )}
        <Form.Root onSubmit={handleSubmit} className="space-y-2">
          <Form.Field name="name">
            <Form.Label className="block text-sm font-medium text-foreground transition-colors duration-300">
              Name
            </Form.Label>
            <Form.Control asChild>
              <input
                className="mt-1 block w-full rounded-md border border-accent-subtle px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background dark:text-foreground disabled:opacity-50 transition-colors duration-300"
                type="text"
                required
                disabled={isSubmitting}
              />
            </Form.Control>
            <div className="min-h-6">
              <Form.Message
                className="text-sm text-destructive mt-1 transition-colors duration-300"
                match="valueMissing"
              >
                Please enter your name
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field name="email">
            <Form.Label className="block text-sm font-medium text-foreground transition-colors duration-300">
              Email
            </Form.Label>
            <Form.Control asChild>
              <input
                className="mt-1 block w-full rounded-md border border-accent-subtle px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background dark:text-foreground disabled:opacity-50 transition-colors duration-300"
                type="email"
                required
                disabled={isSubmitting}
              />
            </Form.Control>
            <div className="min-h-6">
              <Form.Message
                className="text-sm text-destructive mt-1 transition-colors duration-300"
                match="valueMissing"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                className="text-sm text-destructive mt-1 transition-colors duration-300"
                match="typeMismatch"
              >
                Please provide a valid email
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field name="message">
            <Form.Label className="block text-sm font-medium text-foreground transition-colors duration-300">
              Message
            </Form.Label>
            <Form.Control asChild>
              <textarea
                className="mt-1 block w-full rounded-md border border-accent-subtle px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background dark:text-foreground disabled:opacity-50 transition-colors duration-300"
                required
                rows={4}
                disabled={isSubmitting}
              />
            </Form.Control>
            <div className="min-h-6">
              <Form.Message
                className="text-sm text-destructive mt-1 transition-colors duration-300"
                match="valueMissing"
              >
                Please enter a message
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Submit asChild>
            <button
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors duration-300"
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <svg
                    className="animate-spin ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  Send Message
                  <EnvelopeClosedIcon className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
}
