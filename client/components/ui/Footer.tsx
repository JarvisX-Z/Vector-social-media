import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">

          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <img src="/vector.png" alt="" className="h-7 w-7 rounded-sm" />
            <span className="text-sm font-semibold text-neutral-900">Vector</span>
          </div>

          {/* Links (centered) */}
          <div className="flex items-center justify-center gap-6">
            {["About", "Privacy", "Contact", "Terms"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-neutral-400 text-center md:text-right">
            © {new Date().getFullYear()} Vector. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}