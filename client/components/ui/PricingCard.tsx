import Link from "next/link";

interface PricingCardProps {
  onUnlock?: () => void;
  isPaymentPage?: boolean;
}

const benefits = [
  { icon: "📄", text: "Download PDF instantly" },
  { icon: "♾️", text: "Unlimited edits forever" },
  { icon: "✅", text: "ATS-optimized format" },
  { icon: "🎨", text: "Clean, professional layout" },
  { icon: "💾", text: "Data saved in browser" },
  { icon: "🚀", text: "Priority support" },
];

export default function PricingCard({ onUnlock, isPaymentPage = false }: PricingCardProps) {
  return (
    <div className="relative bg-white rounded-3xl border border-neutral-100 overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)" }}>
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

      <div className="p-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-medium text-indigo-500">Most Popular</span>
        </div>

        {/* Plan name & price */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-neutral-500 mb-1">Resume Unlock</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-neutral-900 tracking-tight">$9</span>
            <span className="text-neutral-400 text-sm">.99</span>
          </div>
          <p className="text-sm text-neutral-400 mt-1">One-time payment · No subscription</p>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 mb-8">
          {benefits.map((b) => (
            <li key={b.text} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-sm shrink-0">
                {b.icon}
              </div>
              <span className="text-sm text-neutral-600">{b.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {isPaymentPage ? (
          <button
            onClick={onUnlock}
            className="w-full btn-primary justify-center py-3.5 text-sm"
          >
            Unlock Resume →
          </button>
        ) : (
          <Link href="/payment" className="w-full btn-primary justify-center py-3.5 text-sm block text-center">
            Unlock Resume →
          </Link>
        )}

        <p className="text-center text-[11px] text-neutral-400 mt-3">
          🔒 Secure payment · Instant access
        </p>
      </div>
    </div>
  );
}
