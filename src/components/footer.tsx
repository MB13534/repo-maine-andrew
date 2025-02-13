"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerItems } from "@/config/footer";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-background text-muted-foreground text-sm py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} RepoCoMaine. All rights reserved.</p>
        </div>

        {/* Legal Links */}
        <nav className="space-x-4 text-center">
          {footerItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-foreground transition ${
                pathname === href ? "text-primary font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
