"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const applicationSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  role: z.string().min(2, "Select or enter a role."),
  profile: z.string().url("Add a valid LinkedIn, portfolio, or resume link."),
  note: z.string().min(20, "Share a short note about your fit.")
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export function ApplicationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema)
  });

  function onSubmit(values: ApplicationFormValues) {
    const subject = encodeURIComponent(`Career application: ${values.role}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nRole: ${values.role}\nProfile: ${values.profile}\n\n${values.note}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    reset();
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" autoComplete="email" {...register("email")} />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Role" error={errors.role?.message}>
          <Input placeholder="Senior Data Engineer" {...register("role")} />
        </Field>
        <Field label="Profile link" error={errors.profile?.message}>
          <Input placeholder="https://linkedin.com/in/..." {...register("profile")} />
        </Field>
      </div>
      <Field label="Short note" error={errors.note?.message}>
        <Textarea placeholder="Tell us what you have built and where you want to grow." {...register("note")} />
      </Field>
      <Button type="submit" className="w-full md:w-fit">
        <Send className="size-4" aria-hidden="true" />
        Prepare application email
      </Button>
      {isSubmitSuccessful ? (
        <p className="text-sm font-medium text-primary">
          Your email client has been prepared with the application details.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
    </div>
  );
}
