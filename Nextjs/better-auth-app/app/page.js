import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Better Auth Application</h1>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </main>
  );
}
