import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

async function getStudioLogo(): Promise<string | null> {
  try {
    const res = await fetch(`${PORTAL_URL}/api/public/studio`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data as { logo_url?: string | null }).logo_url ?? null;
  } catch {
    return null;
  }
}

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const logoUrl = await getStudioLogo();

  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
