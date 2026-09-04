import { useState, type FormEvent, type ReactNode } from "react";
import { vehicleCategories } from "../../data/vehicles";
import { CtaButton } from "../ui/CtaButton";

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

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend is currently connected for this form. Once a backend or
    // email service is available, submit `values` there instead of only
    // showing a local success state.
    setStatus("success");
    setValues(initialState);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent-100 bg-accent-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-ink">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <h3 className="font-[var(--font-display)] text-lg font-bold text-ink">
            Thanks — we've noted your enquiry
          </h3>
          <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-text-muted">
            For an immediate response, please call us directly. Otherwise, our team will
            reach out to you as soon as possible.
          </p>
        </div>
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

      <CtaButton type="submit" variant="primary" className="w-full sm:w-auto">
        Send Enquiry
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
