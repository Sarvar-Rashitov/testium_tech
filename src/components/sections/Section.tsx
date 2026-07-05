import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, subtitle, children, center = false, className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-prose">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted-foreground`}>
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
