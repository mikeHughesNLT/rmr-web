export default function ContactPage() {
  return (
    <div className="pt-24 bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Get in Touch</p>
        <h1 className="font-display text-5xl text-[var(--color-forest)] font-light mb-4">Contact Us</h1>
        <p className="text-[var(--color-bark)]/70 font-sans mb-12 text-lg">
          Planning a retreat, celebration, or group stay? We love the creative ones — reach out and let&apos;s talk.
        </p>

        <form
          action="https://formsubmit.co/your-email@example.com"
          method="POST"
          className="space-y-6"
        >
          {/* Replace with your actual email above, or wire up a server action */}
          <input type="hidden" name="_subject" value="RMR Inquiry — Red Mountain Retreat" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/contact?sent=true" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                Name
              </label>
              <input name="name" required type="text"
                className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]" />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                Email
              </label>
              <input name="email" required type="email"
                className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                Dates in Mind
              </label>
              <input name="dates" type="text" placeholder="e.g. July 10–14"
                className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]" />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                Group Size
              </label>
              <input name="group_size" type="text" placeholder="e.g. 10 adults, 2 kids"
                className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]" />
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
              Tell us about your stay
            </label>
            <textarea name="message" rows={5} required
              className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)] resize-none" />
          </div>

          <button type="submit"
            className="bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
