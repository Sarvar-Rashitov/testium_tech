import { useEffect, useRef, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * On mobile: renders children as a horizontal auto-scrolling snap carousel.
 * User touch/scroll pauses the auto-scroll for a few seconds.
 * On desktop: renders children inside the provided grid layout.
 */
export function MobileScroller({
  children,
  gridClassName,
  itemClassName = "w-[82%] xs:w-[70%]",
  speed = 0.6,
}: {
  children: ReactNode[];
  gridClassName: string;
  itemClassName?: string;
  speed?: number;
}) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);

  useEffect(() => {
    if (!isMobile) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (el && Date.now() > pausedUntil.current && el.scrollWidth > el.clientWidth + 4) {
        const next = el.scrollLeft + speed * (dt / 16);
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollTo({ left: 0, behavior: "auto" });
        } else {
          el.scrollLeft = next;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => { pausedUntil.current = Date.now() + 4500; };
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("scroll", pause, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("scroll", pause);
    };
  }, [isMobile, speed]);

  if (isMobile) {
    return (
      <div
        ref={ref}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((c, i) => (
          <div key={i} className={`${itemClassName} shrink-0 snap-start`}>
            {c}
          </div>
        ))}
      </div>
    );
  }
  return <div className={gridClassName}>{children}</div>;
}
