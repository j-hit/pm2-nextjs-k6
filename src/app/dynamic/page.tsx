import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  /**
   * Block the main thread for some time
   */
  const start = Date.now();
  let now = start;
  while (now - start < 500) {
    now = Date.now();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is a dynamic page with 500ms of blocking time</p>
      <p>Generated at {new Date().toLocaleString()}</p>
    </main>
  );
}
