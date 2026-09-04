import { useState, type FormEvent, type ReactNode } from "react";
import { vehicleCategories } from "../../data/vehicles";
import { CtaButton } from "../ui/CtaButton";
import { buildWhatsAppUrl } from "../../utils/whatsapp";

type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  interest: vehicleCategories[0]?.name ?? "",
  message: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+()\-\s\d]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

function buildWhatsAppMessage(values: FormState) {
  const lines = [
    "New enquiry from the Garud Automobiles website",
    "",
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
  ];
  if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);
  lines.push(`Interested in: ${values.interest}`, "", `Message: ${values.message.trim()}`);
  return lines.join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [lastUrl, setLastUrl] = useState("");

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = buildWhatsAppUrl(buildWhatsAppMessage(values));
    setLastUrl(url);
    setStatus("sent");
    setValues(initialState);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent-100 bg-accent-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-ink">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.36A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.2 14.15c-.22.62-1.28 1.2-1.77 1.24-.45.05-1.02.07-1.65-.1a15 15 0 0 1-1.63-.6 11.6 11.6 0 0 1-4.44-3.93 5.4 5.4 0 0 1-1.12-2.85c0-.83.44-1.24.6-1.42.16-.18.35-.22.47-.22h.34c.11 0 .27-.04.42.32.16.38.53 1.3.58 1.4.05.1.08.22.02.35-.06.13-.09.22-.18.34-.09.11-.19.25-.28.34-.09.09-.18.19-.08.37.1.18.44.74.96 1.2.66.6 1.22.79 1.4.88.18.09.28.07.39-.04.11-.11.46-.53.58-.72.12-.18.24-.15.4-.09.16.06 1.03.49 1.2.58.18.09.3.13.34.2.05.08.05.42-.17 1.03Z" />
          </svg>
        </span>
        <div>
          <h3 className="font-[var(--font-display)] text-lg font-bold text-ink">
            Opening WhatsApp…
          </h3>
          <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-text-muted">
            We've prepared your message with your details and opened WhatsApp in a new
            tab — just hit send there. If it didn't open, use the button below.
          </p>
        </div>
        <CtaButton href={lastUrl} target="_blank" rel="noreferrer" variant="primary">
          Open WhatsApp
        </CtaButton>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-accent-700 underline underline-offset-2"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
            placeholder="98765 43210"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Email (optional)" error={errors.email}>
        <input
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClass(!!errors.email)}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </Field>

      <Field label="Vehicle / Product Interested In">
        <select
          value={values.interest}
          onChange={(e) => handleChange("interest", e.target.value)}
          className={inputClass(false)}
        >
          {vehicleCategories.map((v) => (
            <option key={v.id} value={v.name}>
              {v.name}
            </option>
          ))}
          <option value="Other / Not Sure">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`${inputClass(!!errors.message)} min-h-32 resize-y`}
          placeholder="Tell us what you're looking for..."
        />
      </Field>

      <CtaButton
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        icon={
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.36A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.2 14.15c-.22.62-1.28 1.2-1.77 1.24-.45.05-1.02.07-1.65-.1a15 15 0 0 1-1.63-.6 11.6 11.6 0 0 1-4.44-3.93 5.4 5.4 0 0 1-1.12-2.85c0-.83.44-1.24.6-1.42.16-.18.35-.22.47-.22h.34c.11 0 .27-.04.42.32.16.38.53 1.3.58 1.4.05.1.08.22.02.35-.06.13-.09.22-.18.34-.09.11-.19.25-.28.34-.09.09-.18.19-.08.37.1.18.44.74.96 1.2.66.6 1.22.79 1.4.88.18.09.28.07.39-.04.11-.11.46-.53.58-.72.12-.18.24-.15.4-.09.16.06 1.03.49 1.2.58.18.09.3.13.34.2.05.08.05.42-.17 1.03Z" />
          </svg>
        }
      >
        Send via WhatsApp
      </CtaButton>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-text-muted/70 focus:border-ink ${
    hasError ? "border-red-400" : "border-line"
  }`;
}
