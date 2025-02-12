import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} RepoCoMaine. All rights reserved.</p>
        </div>

        {/* Legal Links */}
        <nav className="space-x-4 text-center">
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/legal" className="hover:text-white transition">
            Legal Disclaimer
          </Link>
        </nav>
      </div>
    </footer>
  );
}
