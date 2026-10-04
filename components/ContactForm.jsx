"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_5ahep5f";
const EMAILJS_TEMPLATE_ID = "template_k59wwbg";
const EMAILJS_PUBLIC_KEY = "KjYLWIRHzNFA4JHkP";
const TO_EMAIL = "az.hachemi@esi-sba.dz";

const fieldClass =
  "h-12 rounded-none bg-transparent px-3 text-base shadow-none md:text-base";

function Status({ type, children }) {
  const tone =
    type === "success"
      ? "border-copper text-foreground"
      : "border-destructive text-destructive";
  const Icon = type === "success" ? CheckCircle : AlertCircle;
  return (
    <div role="status" className={`flex items-start gap-2 border px-3 py-3 text-sm ${tone}`}>
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) next.subject = "Subject is required";
    if (!formData.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: TO_EMAIL,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-border bg-panel p-5 sm:p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        Message
      </p>
      <div className="mt-5 space-y-4">
        {submitStatus === "success" ? (
          <Status type="success">Message sent. I will reply by email.</Status>
        ) : null}
        {submitStatus === "error" ? (
          <Status type="error">
            It did not send. Email az.hachemi@esi-sba.dz and I will get it.
          </Status>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Name
            </label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={(event) => handleInputChange("name", event.target.value)}
              aria-invalid={errors.name ? true : undefined}
              className={fieldClass}
            />
            {errors.name ? (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => handleInputChange("email", event.target.value)}
              aria-invalid={errors.email ? true : undefined}
              className={fieldClass}
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            autoComplete="off"
            value={formData.subject}
            onChange={(event) => handleInputChange("subject", event.target.value)}
            aria-invalid={errors.subject ? true : undefined}
            className={fieldClass}
          />
          {errors.subject ? (
            <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={(event) => handleInputChange("message", event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            className="min-h-36 rounded-none bg-transparent px-3 py-3 text-base shadow-none md:text-base"
          />
          {errors.message ? (
            <p className="mt-1 text-sm text-destructive">{errors.message}</p>
          ) : null}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="h-12 w-full rounded-none text-base active:scale-[0.98]"
        >
          <Send className="size-4" aria-hidden="true" />
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
