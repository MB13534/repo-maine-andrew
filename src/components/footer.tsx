import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground text-sm py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} RepoCoMaine. All rights reserved.</p>
        </div>

        {/* Legal Links */}
        <nav className="space-x-4 text-center">
          <Link href="/terms" className="hover:text-foreground transition">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition">
            Privacy Policy
          </Link>
          <Link href="/legal" className="hover:text-foreground transition">
            Legal Disclaimer
          </Link>
        </nav>
      </div>
    </footer>
  );
}
