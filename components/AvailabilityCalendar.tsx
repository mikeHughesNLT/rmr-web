"use client";
import { useEffect, useState } from "react";

type DayData = { date: string; available: boolean; price: string | null };

const DAY_LABELS  = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["January","February","March","April","May","June",
                     "July","August","September","October","November","December"];

const BOOKING_BASE = "https://booking.hospitable.com/widget/a1d62494-3545-4d00-a069-f863b24abc03/2190928";

function formatDisplay(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getDatesInRange(start: string, end: string): string[] {
  const result: string[] = [];
  const cur = new Date(start + "T12:00:00");
  const endD = new Date(end + "T12:00:00");
  cur.setDate(cur.getDate() + 1);
  while (cur < endD) {
    result.push(cur.toISOString().split("T")[0]);
    cur.setDate(cur.getDate() + 1);
  }
  return result;
}

function CalendarMonth({
  year, month, availability, today, checkin, checkout, onDayClick,
}: {
  year: number;
  month: number;
  availability: Map<string, DayData>;
  today: string;
  checkin: string | null;
  checkout: string | null;
  onDayClick: (date: string) => void;
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

          const dateStr    = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const data       = availability.get(dateStr);
          const isPast     = dateStr < today;
          const isToday    = dateStr === today;
          const avail      = data ? data.available : true;
          const price      = data?.price?.replace("$", "").split(".")[0];

          const isCheckin  = dateStr === checkin;
          const isCheckout = dateStr === checkout;
          const isInRange  = !!(checkin && checkout && dateStr > checkin && dateStr < checkout);
          const isSelectable = !isPast && avail;

          let bg = "";
          if (isCheckin || isCheckout)      bg = "bg-[var(--color-gold)] text-white";
          else if (isInRange)               bg = "bg-[var(--color-gold)]/20 text-[var(--color-forest)]";
          else if (!isPast && avail)        bg = "bg-white text-[var(--color-forest)]";
          else if (!isPast && !avail)       bg = "bg-[var(--color-cream-dark)] text-[var(--color-bark)]/35";

          return (
            <div
              key={dateStr}
              title={isSelectable && price ? `$${price}/night` : undefined}
              onClick={() => isSelectable && onDayClick(dateStr)}
              className={[
                "aspect-square flex flex-col items-center justify-center rounded-sm select-none",
                isPast ? "opacity-25" : "",
                isToday && !isCheckin && !isCheckout ? "ring-2 ring-[var(--color-gold)] ring-inset" : "",
                bg,
                isSelectable ? "cursor-pointer hover:ring-2 hover:ring-[var(--color-gold)] hover:ring-inset" : "",
              ].filter(Boolean).join(" ")}
            >
              <span className={[
                "text-xs font-sans leading-none",
                !isPast && !avail && !isCheckin && !isCheckout ? "line-through" : "",
              ].filter(Boolean).join(" ")}>
                {day}
              </span>
              {isSelectable && price && !isCheckin && !isCheckout && (
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
  const [offset, setOffset]             = useState(0);
  const [checkin, setCheckin]           = useState<string | null>(null);
  const [checkout, setCheckout]         = useState<string | null>(null);
  const [rangeError, setRangeError]     = useState(false);

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

  function handleDayClick(dateStr: string) {
    setRangeError(false);
    if (!checkin || (checkin && checkout)) {
      setCheckin(dateStr);
      setCheckout(null);
      return;
    }
    if (dateStr <= checkin) {
      setCheckin(dateStr);
      setCheckout(null);
      return;
    }
    // Check for blocked nights within range
    const blocked = getDatesInRange(checkin, dateStr).some(d => {
      const day = availability.get(d);
      return day && !day.available;
    });
    if (blocked) {
      setRangeError(true);
      setCheckin(dateStr);
      setCheckout(null);
    } else {
      setCheckout(dateStr);
    }
  }

  const base   = new Date();
  const month1 = new Date(base.getFullYear(), base.getMonth() + offset, 1);
  const month2 = new Date(base.getFullYear(), base.getMonth() + offset + 1, 1);

  const bookingUrl = checkin && checkout
    ? `${BOOKING_BASE}?checkin=${checkin}&checkout=${checkout}`
    : null;

  const prompt = !checkin
    ? "Select your check-in date"
    : !checkout
    ? "Now pick your check-out date"
    : `${formatDisplay(checkin)} → ${formatDisplay(checkout)}`;

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

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setOffset(o => Math.max(0, o - 2))}
          disabled={offset === 0}
          className="px-4 py-2 text-sm font-sans border border-[var(--color-cream-dark)] bg-white text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Earlier
        </button>
        <span className="text-xs tracking-[0.2em] uppercase font-sans text-[var(--color-bark)]/60 text-center">
          {prompt}
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
        <CalendarMonth
          year={month1.getFullYear()} month={month1.getMonth()}
          availability={availability} today={todayStr}
          checkin={checkin} checkout={checkout}
          onDayClick={handleDayClick}
        />
        <CalendarMonth
          year={month2.getFullYear()} month={month2.getMonth()}
          availability={availability} today={todayStr}
          checkin={checkin} checkout={checkout}
          onDayClick={handleDayClick}
        />
      </div>

      {rangeError && (
        <p className="mt-4 text-sm font-sans text-center text-red-600">
          That range includes a booked night — choose a different check-out date.
        </p>
      )}

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-5 text-xs font-sans text-[var(--color-bark)]/60 border-t border-[var(--color-cream-dark)] pt-5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white border border-[var(--color-cream-dark)] rounded-sm" />
          Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[var(--color-cream-dark)] rounded-sm" />
          Unavailable
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[var(--color-gold)] rounded-sm" />
          Selected
        </div>
      </div>

      {/* Book CTA */}
      {bookingUrl && (
        <div className="mt-8 pt-8 border-t border-[var(--color-cream-dark)] text-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-gold)] text-white text-sm tracking-widest uppercase px-10 py-4 hover:bg-[var(--color-gold-light)] transition-colors font-sans"
          >
            Book {formatDisplay(checkin!)} → {formatDisplay(checkout!)}
          </a>
          <p className="text-xs text-[var(--color-bark)]/40 font-sans mt-3">
            You&apos;ll review the full breakdown before any payment is charged. You can adjust dates there too.
          </p>
          <button
            onClick={() => { setCheckin(null); setCheckout(null); setRangeError(false); }}
            className="text-xs text-[var(--color-bark)]/40 font-sans mt-2 underline hover:text-[var(--color-bark)]/70 transition-colors"
          >
            Clear selection
          </button>
        </div>
      )}
    </div>
  );
}
