export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Payment Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose Your Stripe Data Again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically back up customers, transactions, and metrics to secure cloud storage. Migrate to PayPal, Square, or Paddle in one click.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Backing Up — $39/mo
        </a>
        <p className="text-xs text-[#484f58] mt-4">Cancel anytime. No lock-in.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔒", title: "Encrypted Backups", desc: "AES-256 encrypted snapshots stored in your own cloud bucket." },
          { icon: "⚡", title: "Instant Export", desc: "One-click CSV/JSON export formatted for PayPal, Square & Paddle." },
          { icon: "📊", title: "Live Dashboard", desc: "Monitor backup status, data health, and migration readiness." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Stripe data backups",
              "Automated daily snapshots",
              "Export to PayPal, Square, Paddle",
              "Encrypted cloud storage",
              "Email alerts on backup failures",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What Stripe data gets backed up?",
              a: "Customers, payment methods, charges, subscriptions, invoices, products, prices, and payouts — everything you need to reconstruct your business on another processor."
            },
            {
              q: "How does the migration export work?",
              a: "We transform your Stripe data into the exact import format required by PayPal, Square, and Paddle. Download a ready-to-import file and upload it directly to your new processor."
            },
            {
              q: "Is my data secure?",
              a: "Yes. All backups are AES-256 encrypted in transit and at rest. We never store your Stripe secret key — only a restricted API key with read-only permissions is required."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Stripe Business Backup. All rights reserved.
      </footer>
    </main>
  );
}
