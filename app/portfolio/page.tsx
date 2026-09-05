import LatestWorkGrid from '@/components/LatestWorkGrid';

export default function PortfolioMainPage() {
  return (
    <main className="min-h-screen bg-[#030408] flex flex-col">
      <div className="flex-grow pt-24 md:pt-32">
        <LatestWorkGrid />
      </div>
    </main>
  );
}