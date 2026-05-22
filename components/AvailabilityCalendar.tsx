"use client";
import { useEffect, useState } from "react";

type DayData = { date: string; available: boolean; price: string | null };

const DAY_LABELS  = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["January","February","March","April","May","June",
                     "July","August","September","October","November","December"];

function CalendarMonth({
  year, month, availability, today,
}: {
  year: number;
  month: number;
  availability: Map<string, DayData>;
  today: string;
}) {
  const firstDow    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <p className="font-display text-xl text-[var(--color-forest)] text-center mb-4">
        {MONTH_NAMES[month]} {year}
      </p>

      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map(d => (
          <div key={d} className="text-center text-[10px] font-sans text-[var(--color-bark)]/40 uppercase tracking-wide py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (!day) return <div key={`e${i}`} />;

          const dateStr  = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const data     = availability.get(dateStr);
          const isPast   = dateStr < today;
          const isToday  = dateStr === today;
          const avail    = data ? data.available : true; // default open if no data yet
          const price    = data?.price?.replace("$","").split(".")[0];

          return (
            <div
              key={dateStr}
              title={avail && price ? `$${price}/night` : undefined}
              className={[
                "aspect-square flex flex-col items-center justify-center rounded-sm select-none",
                isPast ? "opacity-25" : "",
                isToday ? "ring-2 ring-[var(--color-gold)] ring-inset" : "",
                !isPast && avail  ? "bg-white text-[var(--color-forest)] cursor-default" : "",
                !isPast && !avail ? "bg-[var(--color-cream-dark)] text-[var(--color-bark)]/35" : "",
              ].filter(Boolean).join(" ")}
            >
              <span className={[
                "text-xs font-sans leading-none",
                !isPast && !avail ? "line-through" : "",
              ].filter(Boolean).join(" ")}>
                {day}
              </span>
              {!isPast && avail && price && (
                <span className="text-[8px] text-[var(--color-gold)] leading-none mt-0.5 hidden sm:block">
                  ${price}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const [availability, setAvailability] = useState<Map<string, DayData>>(new Map());
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(false);
  const [offset, setOffset]             = useState(0); // months from current

  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetch("/api/availability")
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        const map = new Map<string, DayData>();
        (data.availability as DayData[]).forEach(d => map.set(d.date, d));
        setAvailability(map);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const base   = new Date();
  const month1 = new Date(base.getFullYear(), base.getMonth() + offset, 1);
  const month2 = new Date(base.getFullYear(), base.getMonth() + offset + 1, 1);

  if (loading) {
    return (
      <div className="py-16 text-center font-sans text-sm text-[var(--color-bark)]/40 animate-pulse">
        Checking availability…
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center font-sans text-sm text-[var(--color-bark)]/50">
        Couldn&apos;t load availability right now — please try refreshing or{" "}
        <a href="/contact" className="text-[var(--color-gold)] hover:underline">contact us directly</a>.
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-cream-dark)] p-6 md:p-10">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setOffset(o => Math.max(0, o - 2))}
          disabled={offset === 0}
          className="px-4 py-2 text-sm font-sans border border-[var(--color-cream-dark)] bg-white text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Earlier
        </button>
        <span className="text-xs tracking-[0.2em] uppercase font-sans text-[var(--color-bark)]/50">
          Availability
        </span>
        <button
          onClick={() => setOffset(o => Math.min(10, o + 2))}
          className="px-4 py-2 text-sm font-sans border border-[var(--color-cream-dark)] bg-white text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white transition-colors"
        >
          Later →
        </button>
      </div>

      {/* Two-month grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <CalendarMonth year={month1.getFullYear()} month={month1.getMonth()} availability={availability} today={todayStr} />
        <CalendarMonth year={month2.getFullYear()} month={month2.getMonth()} availability={availability} today={todayStr} />
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-5 text-xs font-sans text-[var(--color-bark)]/60 border-t border-[var(--color-cream-dark)] pt-5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white border border-[var(--color-cream-dark)] rounded-sm" />
          Available — price shown on desktop
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[var(--color-cream-dark)] rounded-sm" />
          Unavailable
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-[var(--color-gold)] rounded-sm" />
          Today
        </div>
      </div>
    </div>
  );
}
