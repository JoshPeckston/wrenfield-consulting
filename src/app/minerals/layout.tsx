import MineralsNav from '@/components/minerals/MineralsNav';

export default function MineralsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MineralsNav />
      <main className="container mx-auto px-6 py-8">{children}</main>
    </>
  );
}
