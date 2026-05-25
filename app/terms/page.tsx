import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Red Mountain Retreat",
  description: "Terms of Service for Red Mountain Retreat, Maple Falls, Washington.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">

        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Legal</p>
        <h1 className="font-display text-5xl text-[var(--color-forest)] font-light mb-3">Terms of Service</h1>
        <p className="text-[var(--color-bark)]/40 font-sans text-xs mb-12">Last updated: May 2026</p>

        <div className="space-y-8 font-sans text-sm text-[var(--color-bark)]/70 leading-relaxed">

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">1. Acceptance of Terms</h2>
            <p>By accessing this website or making a reservation at Red Mountain Retreat, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site or make a booking.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">2. Reservations & Cancellations</h2>
            <p>All reservations are processed through our booking platform (Hospitable / Airbnb). Reservation terms, cancellation policies, and refund eligibility are governed by the terms of the platform through which you booked. Please review those terms carefully before completing your reservation.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">3. Property Rules</h2>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Maximum occupancy is 14 guests. Exceeding this limit is grounds for immediate termination of stay without refund.</li>
              <li>No events, parties, or gatherings beyond the registered guest count without prior written approval.</li>
              <li>Pets are permitted only with advance approval and applicable pet fees. Unauthorized pets may result in additional charges.</li>
              <li>Guests are responsible for the property during their stay and for any damage beyond normal wear and tear.</li>
              <li>Quiet hours and all posted house rules must be observed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">4. Limitation of Liability</h2>
            <p>Red Mountain Retreat is provided as-is. We make reasonable efforts to ensure the property is safe and as described, but we are not liable for injuries, losses, or damages arising from your stay, use of the property, or activities on or near the premises. Guests assume all risks associated with outdoor activities, trails, and natural surroundings.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">5. Intellectual Property</h2>
            <p>All content on this website — including text, photography, and video — is owned by Red Mountain Retreat and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Washington, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of Whatcom County, Washington.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">7. Contact</h2>
            <p>Questions about these terms? Email us at{" "}
              <a href="mailto:mike@stayredmountain.com" className="text-[var(--color-gold)] hover:underline">
                mike@stayredmountain.com
              </a>.
            </p>
          </section>

        </div>

        <div className="border-t border-[var(--color-cream-dark)] mt-12 pt-6 flex gap-6 text-xs font-sans text-[var(--color-bark)]/40">
          <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Back to Home</Link>
        </div>

      </div>
    </div>
  );
}
