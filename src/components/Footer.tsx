"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerItems } from "@/config/footer";
import { Heart } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-muted text-muted-background text-sm py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} RepoMaine. All rights reserved.</p>
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

      {/* Branding */}
      <div className="mt-6 text-center text-muted-foreground">
        <span className="text-xs flex items-center justify-center gap-1">
          Made with <Heart className="text-red-500 w-4 h-4" /> by{" "}
        </span>
        <a
          href="https://mbarry.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground/80 hover:text-primary font-medium"
        >
          Michael Barry Web Development, LLC
        </a>
      </div>
    </footer>
  );
}
