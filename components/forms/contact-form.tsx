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

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().min(2, "Enter your company name."),
  focus: z.string().min(2, "Tell us the area you want to discuss."),
  message: z.string().min(20, "Share a little more context.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      focus: "",
      message: ""
    }
  });

  function onSubmit(values: ContactFormValues) {
    const subject = encodeURIComponent(`Ontologix inquiry from ${values.company}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\nFocus: ${values.focus}\n\n${values.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <Input type="email" autoComplete="email" {...register("email")} />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Company" error={errors.company?.message}>
          <Input autoComplete="organization" {...register("company")} />
        </Field>
        <Field label="Focus area" error={errors.focus?.message}>
          <Input placeholder="Data engineering, AI, cloud..." {...register("focus")} />
        </Field>
      </div>
      <Field label="Program context" error={errors.message?.message}>
        <Textarea
          placeholder="Describe the decision, workflow, data challenge, or transformation goal."
          {...register("message")}
        />
      </Field>
      <Button type="submit" className="w-full md:w-fit">
        <Send className="size-4" aria-hidden="true" />
        Send inquiry
      </Button>
      {isSubmitSuccessful ? (
        <p className="text-sm font-medium text-primary">
          Your email client has been prepared with the inquiry details.
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
