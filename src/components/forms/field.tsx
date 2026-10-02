import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const control =
  "block w-full rounded-lg border border-ink/25 bg-white px-4 py-3 text-base text-ink placeholder:text-slate/60 transition-colors focus:border-ink aria-[invalid=true]:border-ember-deep";

type FieldProps = {
  name: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
};

export function Field({
  name,
  label,
  error,
  optional,
  className,
  ...input
}: FieldProps & Omit<ComponentProps<"input">, "name" | "className">) {
  return (
    <FieldShell name={name} label={label} error={error} optional={optional} className={className}>
      <input id={name} name={name} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={control} {...input} />
    </FieldShell>
  );
}

export function TextArea({
  name,
  label,
  error,
  optional,
  className,
  ...area
}: FieldProps & Omit<ComponentProps<"textarea">, "name" | "className">) {
  return (
    <FieldShell name={name} label={label} error={error} optional={optional} className={className}>
      <textarea id={name} name={name} rows={4} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={control} {...area} />
    </FieldShell>
  );
}

export function Select({
  name,
  label,
  error,
  optional,
  className,
  options,
  placeholder,
  ...select
}: FieldProps & {
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder: string;
} & Omit<ComponentProps<"select">, "name" | "className">) {
  return (
    <FieldShell name={name} label={label} error={error} optional={optional} className={className}>
      <select id={name} name={name} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={control} {...select}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

function FieldShell({
  name,
  label,
  error,
  optional,
  className,
  children,
}: FieldProps & { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
        {optional && <span className="ml-1.5 font-normal text-slate">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-sm font-medium text-ember-deep">
          {error}
        </p>
      )}
    </div>
  );
}

/** Hidden from people and screen readers; bots fill it in. Checked in lib/forms.ts. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
