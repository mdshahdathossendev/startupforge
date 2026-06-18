import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8  shadow-md">
      <div className="text-2xl font-bold">
        <Image src={'/ChatGPT Image Jun 18, 2026, 08_40_54 AM.png'} width={200} height={200} alt="logo"></Image>
      </div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/startups">Browse Startups</Link>
        <Link href="/opportunities">Browse Opportunities</Link>
      </div>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-4 py-2 border rounded"
        >
          Login
        </Link>

        <Link
          href="/get-started"
          className="px-4 py-2 bg-amber-600 text-white rounded"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}