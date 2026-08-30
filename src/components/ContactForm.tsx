import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setSubmitted(Object.keys(e).length === 0);
  };

  const field =
    "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70";

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio message from ${values.name || "someone"}`,
  )}&body=${encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)}`;

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            className={field}
            placeholder="Your name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={field}
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={field}
          placeholder="What would you like to talk about?"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" /> Send Message
      </button>

      <p className="mt-4 text-xs text-muted-foreground" role="status">
        No email service is connected yet, so this form does not deliver messages on its own.
        {submitted ? (
          <>
            {" "}
            Your details look valid —{" "}
            <a href={mailtoHref} className="text-primary underline underline-offset-4">
              send it directly by email
            </a>
            .
          </>
        ) : (
          " It's ready to be wired to an email service later."
        )}
      </p>
    </form>
  );
}
