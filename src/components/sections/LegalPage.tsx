import type { ReactNode } from "react";
import { Section } from "@/components/sections/Section";

export function LegalPage({
  title, intro, sections,
}: {
  title: string;
  intro: string;
  sections: { h: string; p: ReactNode }[];
}) {
  return (
    <Section className="pt-32" title={title} subtitle={intro}>
      <div className="mx-auto max-w-3xl">
        {sections.map((s) => (
          <div key={s.h} className="mt-8 first:mt-0">
            <h2 className="text-xl font-semibold">{s.h}</h2>
            <p className="mt-2 text-muted-foreground">{s.p}</p>
          </div>
        ))}
        <p className="mt-12 text-xs text-muted-foreground">Last updated: 2026-01-01</p>
      </div>
    </Section>
  );
}
