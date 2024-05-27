import Image from "next/image";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is a static page</p>
    </main>
  );
}
