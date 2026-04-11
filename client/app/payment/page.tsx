"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PricingCard from "@/components/ui/PricingCard";

export default function PaymentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"pricing" | "checkout">("pricing");

  const handleUnlock = () => {
    setStep("checkout");
  };

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/download");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-neutral-50/50">
      <Navbar />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-medium mb-5">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Your resume is ready to unlock
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              One small step to your
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
                next opportunity
              </span>
            </h1>
            <p className="text-neutral-500 text-base max-w-lg mx-auto">
              Unlock your resume to download a pixel-perfect PDF — ready to send to any recruiter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {/* Pricing card */}
            <div className="lg:col-span-3">
              {step === "pricing" ? (
                <PricingCard onUnlock={handleUnlock} isPaymentPage />
              ) : (
                <div className="bg-white rounded-3xl border border-neutral-100 p-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                  <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full -mt-8 mb-8 mx-0 relative -translate-x-8 w-[calc(100%+64px)]" />
                  <h3 className="text-base font-bold text-neutral-800 mb-6">Payment Details</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-xs font-medium text-neutral-500 mb-1 block">Card number</label>
                      <input className="input-field" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-neutral-500 mb-1 block">Expiry</label>
                        <input className="input-field" placeholder="MM / YY" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-neutral-500 mb-1 block">CVC</label>
                        <input className="input-field" placeholder="•••" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-neutral-500 mb-1 block">Name on card</label>
                      <input className="input-field" placeholder="Alex Johnson" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-neutral-500 mb-1 block">Email</label>
                      <input className="input-field" placeholder="alex@example.com" />
                    </div>
                  </div>

                  <button
                    onClick={handlePay}
                    disabled={loading}
                    className="w-full btn-primary justify-center py-3.5 text-sm disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Pay $9.99 · Unlock Resume →"
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    {["🔒 SSL Encrypted", "✓ No subscription", "✓ Instant access"].map((item) => (
                      <span key={item} className="text-[10px] text-neutral-400">{item}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — what you get */}
            <div className="lg:col-span-2">
              <div className="section-card h-full">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">What you get</h4>

                <div className="space-y-4">
                  {[
                    { icon: "📄", title: "PDF Download", desc: "Professional, print-ready format" },
                    { icon: "✅", title: "ATS Optimized", desc: "Passes automated screening systems" },
                    { icon: "♾️", title: "Unlimited Edits", desc: "Come back and update anytime" },
                    { icon: "🔒", title: "Private & Secure", desc: "Your data never leaves your browser" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-base shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-700">{item.title}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-neutral-500">Resume Unlock</span>
                    <span className="text-sm font-semibold text-neutral-800">$9.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">One-time payment</span>
                    <span className="text-xs text-emerald-600 font-medium">No recurring charges</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-100 flex justify-between items-center">
                    <span className="text-sm font-bold text-neutral-900">Total</span>
                    <span className="text-sm font-bold text-neutral-900">$9.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
