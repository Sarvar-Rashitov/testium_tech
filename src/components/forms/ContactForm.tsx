import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { submitLead } from "@/lib/leads.functions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";

const Schema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  company: z.string().trim().max(200).optional(),
  telegram: z
    .string()
    .trim()
    .min(2, "Required")
    .max(64)
    .regex(/^@?[A-Za-z0-9_]{3,32}$/, "Invalid Telegram username"),
  phone: z
    .string()
    .trim()
    .min(6, "Required")
    .max(32)
    .regex(/^[+\d\s()-]+$/, "Invalid phone"),
  service: z.string().max(120).optional(),
  budget: z.string().max(60).optional(),
  message: z.string().trim().min(1, "Required").max(4000),
});
type Form = z.infer<typeof Schema>;

const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k – $150k", "$150k+"];

export function ContactForm({ compact = false, source = "contact-page" }: { compact?: boolean; source?: string }) {
  const { t } = useTranslation();
  const submit = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: Form) => {
    setStatus("idle");
    try {
      const tg = data.telegram.startsWith("@") ? data.telegram : `@${data.telegram}`;
      await submit({
        data: {
          name: data.name,
          telegram: tg,
          company: data.company ?? "",
          phone: data.phone,
          service: data.service ?? "",
          budget: data.budget ?? "",
          message: data.message,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          source,
        },
      });
      setStatus("success");
      reset();
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <Field label={t("contact.name")} error={errors.name?.message}>
          <Input {...register("name")} placeholder="Jane Doe" />
        </Field>
        {!compact && (
          <Field label={t("contact.company")}>
            <Input {...register("company")} placeholder="Acme Inc." />
          </Field>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("contact.telegram")} error={errors.telegram?.message}>
          <Input {...register("telegram")} placeholder="@username" autoComplete="off" />
        </Field>
        <Field label={t("contact.phone")} error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} placeholder="+998 90 123 45 67" autoComplete="tel" />
        </Field>
      </div>
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t("contact.service")}>
            <select {...register("service")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="">{t("contact.selectService")}</option>
              {services.map((s) => {
                const label = t(`data.services.${s.slug}.title`);
                return <option key={s.slug} value={label}>{label}</option>;
              })}
            </select>
          </Field>
          <Field label={t("contact.budget")}>
            <select {...register("budget")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="">{t("contact.selectBudget")}</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>
        </div>
      )}
      <Field label={t("contact.message")} error={errors.message?.message}>
        <Textarea rows={compact ? 3 : 5} {...register("message")} placeholder={t("contact.messagePlaceholder")} />
      </Field>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
        {isSubmitting ? (
          <><Loader2 className="h-4 w-4 animate-spin" />{t("common.sending")}</>
        ) : t("common.send")}
      </Button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="h-4 w-4" /> {t("common.success")}
          </motion.div>
        )}
        {status === "error" && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" /> {t("common.error")}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
