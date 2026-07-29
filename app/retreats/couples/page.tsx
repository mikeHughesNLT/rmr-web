import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import InterestForm from "./InterestForm";

export const metadata: Metadata = {
  title: "Couples Retreat — Red Mountain Retreat",
  robots: { index: false, follow: false },
};

export default async function CouplesRetreatPage() {
  const cookieStore = await cookies();
  const authed = cookieStore.get("couples-retreat-auth")?.value === "1";
  if (!authed) redirect("/retreats/couples/unlock");

  return (
    <div className="bg-[var(--color-cream)]">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end">
        <Image
          src="/images/exterior-02.jpg"
          alt="Red Mountain Retreat exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/90 via-[var(--color-forest)]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 w-full">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
            Red Mountain Retreat · March 12–14, 2027
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-4">
            Red Mountain<br />Couples Retreat
          </h1>
          <p className="font-sans text-white/70 text-sm max-w-lg">
            A weekend for your marriage — rooted in faith, grounded in practice,
            set in the mountains of the Pacific Northwest.
          </p>
        </div>
      </section>

      {/* Opening quote */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-6">
          About the Retreat
        </p>
        <p className="font-display text-3xl md:text-4xl text-[var(--color-forest)] font-light leading-snug mb-4">
          &ldquo;Unless the Lord builds the house,<br />the builders labor in vain.&rdquo;
        </p>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[var(--color-bark)]/50 mb-10">
          Psalm 127:1
        </p>
        <div className="space-y-5 font-sans text-[var(--color-bark)] text-[15px] leading-relaxed">
          <p>
            A healthy marriage is built deliberately. It needs a sound foundation, clear design,
            dependence on God, regular maintenance, honest repair, strong protection,
            and a purpose that extends beyond the two of you.
          </p>
          <p>
            This retreat combines seven weeks of online curriculum — taught by Steve &amp; Trudy Samsill —
            with two full days together at Red Mountain Lodge. You arrive prepared, and you leave
            with a real plan for the marriage you want to keep building.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[var(--color-forest)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-12 text-center">
            What&apos;s Included
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Seven Online Video Sessions",
                body: "Pre-recorded teaching by Trudy Samsill, covering seven areas of marriage: Foundation, Design, Depend, Tend, Mend, Defend, and Extend. Watch at your own pace in the weeks before the retreat.",
              },
              {
                num: "02",
                title: "Two Live Online Meetings",
                body: "Two preliminary video calls with Steve & Trudy — to introduce the material, answer questions, and help you arrive at the lodge ready to go deep.",
              },
              {
                num: "03",
                title: "Printed Course Workbooks",
                body: "PDF workbook materials covering all seven sections — print and bring to the lodge. Built for couple reflection, private exercises, and a written marriage plan you take home.",
              },
              {
                num: "04",
                title: "Two Nights at Red Mountain Lodge",
                body: "Check in Friday March 12. Full-day activities Friday and Saturday. Morning prayer and safe travels Sunday March 14. 25 private acres, Treehouse Sauna, the great room, cedar forest — all yours.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="border border-white/10 p-8">
                <p className="font-display text-4xl text-[var(--color-gold)]/40 font-light mb-4">{num}</p>
                <h3 className="font-display text-xl text-white font-light mb-3">{title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend schedule */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-10">
          Weekend Schedule
        </p>
        <div className="space-y-8">
          {[
            {
              day: "Friday, March 12",
              items: [
                "Arrival & check-in",
                "Welcome dinner",
                "Opening session — setting intentions for the weekend",
              ],
            },
            {
              day: "Saturday, March 13",
              items: [
                "Morning session — deep-dive teaching & couple exercises",
                "Afternoon free time (sauna, trails, rest, private reflection)",
                "Evening session — marriage blueprint workshop",
                "Dinner together",
              ],
            },
            {
              day: "Sunday, March 14",
              items: [
                "Morning prayer & commissioning",
                "Farewell & safe travels",
              ],
            },
          ].map(({ day, items }) => (
            <div key={day} className="flex gap-8">
              <div className="w-44 shrink-0 pt-0.5">
                <p className="font-sans text-xs font-medium text-[var(--color-forest)] tracking-wide">{day}</p>
              </div>
              <div className="flex-1 border-l border-[var(--color-forest)]/15 pl-8">
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="font-sans text-[var(--color-bark)] text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[var(--color-forest)]/10" />
      </div>

      {/* Seven areas */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4">
          The Curriculum
        </p>
        <p className="font-display text-3xl text-[var(--color-forest)] font-light mb-10">
          Seven Areas of Marriage
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(
            [
              ["Foundation", "What are we building upon?"],
              ["Design", "God's original plan for marriage"],
              ["Depend", "Building with God's help"],
              ["Tend", "Regular inspection and maintenance"],
              ["Mend", "Honest repair and forgiveness"],
              ["Defend", "Protecting what God is rebuilding"],
              ["Extend", "A restored marriage becomes a place of hope for others"],
            ] as [string, string][]
          ).map(([title, desc]) => (
            <div key={title} className="border border-[var(--color-forest)]/10 p-5 bg-white/50">
              <p className="font-display text-lg text-[var(--color-forest)] font-light mb-2">{title}</p>
              <p className="font-sans text-[var(--color-bark)]/70 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="font-sans text-[11px] text-[var(--color-bark)]/40 mt-8 leading-relaxed max-w-2xl">
          This retreat is a marriage enrichment and education experience. It is not a substitute for
          licensed marriage counseling, mental-health treatment, or crisis intervention.
        </p>
      </section>

      {/* Meet Steve & Trudy */}
      <section className="bg-[#f0e9da] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-12 text-center">
            Your Facilitators
          </p>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="relative w-full md:w-80 h-96 shrink-0">
              <Image
                src="/images/steve-trudy.jpg"
                alt="Steve and Trudy Samsill"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl text-[var(--color-forest)] font-light mb-2">
                Steve &amp; Trudy Samsill
              </h2>
              <p className="font-sans text-[var(--color-gold)] text-xs tracking-widest uppercase mb-6">
                Marriage Educators · 35+ Years
              </p>
              <div className="space-y-4 font-sans text-[var(--color-bark)] text-sm leading-relaxed">
                <p>
                  Steve and Trudy Samsill have been faithfully following Jesus, serving local
                  churches, and ministering wherever God opens doors — through writing, preaching,
                  teaching, and counseling individuals and couples. They have served churches across
                  the US and internationally through short-term missions.
                </p>
                <p>
                  Since 1989, Steve has served as elder, deacon, board member, youth pastor, life
                  group leader, and associate pastor at churches in Texas and Washington. Trudy has
                  served alongside him as youth pastor, life group leader, and women&apos;s Bible
                  study teacher. She has written two Bible studies, four inspirational fiction
                  novels, and one non-fiction book.
                </p>
                <p>
                  Together they have led multiple life groups, marriage seminars, and retreats since
                  2005. They are passionate about discipleship, marriage ministry, and seeing people
                  live in the freedom that Jesus purchased for each of us.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 h-72 md:h-96 w-full">
            <Image
              src="/images/steve-trudy-field.jpg"
              alt="Steve and Trudy Samsill"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interest form */}
      <section className="bg-[var(--color-forest)] py-20" id="register">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4 text-center">
            Register Your Interest
          </p>
          <p className="font-display text-3xl text-white font-light text-center mb-3">
            Reserve Your Spot
          </p>
          <p className="font-sans text-white/60 text-sm text-center mb-10">
            Spots are limited. Fill out the form below and we&apos;ll follow up with pricing,
            logistics, and next steps.
          </p>
          <InterestForm />
        </div>
      </section>

    </div>
  );
}
