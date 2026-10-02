export type FormState = {
  status: "idle" | "error" | "sent";
  message?: string;
  errors?: Partial<Record<string, string>>;
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Rule = { required?: boolean; email?: boolean; label: string };

/** Reads the listed fields from FormData, trims them, and returns values plus per-field errors. */
export function readFields(formData: FormData, rules: Record<string, Rule>) {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const [name, rule] of Object.entries(rules)) {
    const raw = formData.get(name);
    const value = typeof raw === "string" ? raw.trim() : "";
    values[name] = value;

    if (rule.required && !value) {
      errors[name] = `Enter your ${rule.label}.`;
    } else if (rule.email && value && !EMAIL.test(value)) {
      errors[name] = "Enter a valid email address, like name@example.com.";
    }
  }

  return { values, errors, hasErrors: Object.keys(errors).length > 0 };
}

/** Honeypot: real people never see this field, so any value means a bot. */
export function isSpam(formData: FormData) {
  const trap = formData.get("company");
  return typeof trap === "string" && trap.length > 0;
}
