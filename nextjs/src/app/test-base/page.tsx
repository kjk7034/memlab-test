"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Test Base</h1>
      <ul>
        <li>
          <Link href="/test">Test Page</Link>
        </li>
      </ul>
    </main>
  );
}
