"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address.")
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema)
  });

  function onSubmit() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 sm:grid-cols-[1fr_auto]" noValidate>
      <div>
        <Input
          type="email"
          aria-label="Work email"
          placeholder="Work email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email?.message ? (
          <p className="mt-2 text-sm font-medium text-destructive">{errors.email.message}</p>
        ) : null}
      </div>
      <Button type="submit">
        Subscribe
        <ArrowRight className="size-4" aria-hidden="true" />
      </Button>
      {isSubmitSuccessful ? (
        <p className="text-sm font-medium text-primary sm:col-span-2">
          Thank you. You are on the insights list.
        </p>
      ) : null}
    </form>
  );
}
