import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Red Mountain Retreat",
  description: "Privacy Policy for Red Mountain Retreat, Maple Falls, Washington.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">

        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Legal</p>
        <h1 className="font-display text-5xl text-[var(--color-forest)] font-light mb-3">Privacy Policy</h1>
        <p className="text-[var(--color-bark)]/40 font-sans text-xs mb-12">Last updated: May 2026</p>

        <div className="space-y-8 font-sans text-sm text-[var(--color-bark)]/70 leading-relaxed">

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">1. Who We Are</h2>
            <p>Red Mountain Retreat is a short-term vacation rental property located in Maple Falls, Washington, operated by Mike Hughes. Our website is <span className="text-[var(--color-bark)]">stayredmountain.com</span>. Contact: <a href="mailto:mike@stayredmountain.com" className="text-[var(--color-gold)] hover:underline">mike@stayredmountain.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">2. Information We Collect</h2>
            <p className="mb-2">We collect information you provide directly when you:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Submit the contact form (name, email, message)</li>
              <li>Make a reservation through our booking platform (name, email, payment info handled by the platform)</li>
              <li>Email or message us directly</li>
            </ul>
            <p className="mt-3">We also collect standard analytics data (pages visited, browser type, general location) through Google Analytics.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to your inquiries and manage your reservation</li>
              <li>To send booking confirmations and property information</li>
              <li>To improve our website and guest experience</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">4. Third-Party Services</h2>
            <p className="mb-2">We use the following third-party services, each with their own privacy policies:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Hospitable</strong> — reservation and property management platform</li>
              <li><strong>Airbnb</strong> — booking platform (when booking through Airbnb)</li>
              <li><strong>Google Analytics</strong> — website analytics (anonymized)</li>
              <li><strong>Meta Pixel</strong> — advertising and analytics (Facebook/Instagram)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">5. Cookies</h2>
            <p>This site uses cookies for analytics and functionality. By using the site, you consent to standard cookie use. You can disable cookies in your browser settings, though some features may not function properly.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">6. Data Retention</h2>
            <p>We retain contact and inquiry data for up to 2 years for business correspondence purposes. Reservation data is retained as required by law and for tax/accounting purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by emailing <a href="mailto:mike@stayredmountain.com" className="text-[var(--color-gold)] hover:underline">mike@stayredmountain.com</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">8. Governing Law</h2>
            <p>This policy is governed by the laws of the State of Washington. By using this site, you consent to the jurisdiction of courts in Whatcom County, Washington.</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[var(--color-forest)] mb-2">9. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with a revised date. Continued use of the site after changes constitutes acceptance.</p>
          </section>

        </div>

        <div className="border-t border-[var(--color-cream-dark)] mt-12 pt-6 flex gap-6 text-xs font-sans text-[var(--color-bark)]/40">
          <Link href="/terms" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</Link>
          <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Back to Home</Link>
        </div>

      </div>
    </div>
  );
}
