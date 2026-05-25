import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Better Auth Application</h1>
      <nav>
        <Link href="/login">Login</Link> <br/><br/><br/>
        <Link href="/register">Register</Link><br/><br/><br/>
        <Link href="/dashboard">Dashboard</Link><br/><br/><br/>
      </nav>
    </main>
  );
}
