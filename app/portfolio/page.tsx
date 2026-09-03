import Header from '@/components/Header'; // Apne header ka correct path dein
import Footer from '@/components/Footer'; // Apne footer ka correct path dein
import LatestWorkGrid from '@/components/LatestWorkGrid';

export default function PortfolioMainPage() {
  return (
    <main className="min-h-screen bg-[#030408] flex flex-col">
      <Header />
      <div className="flex-grow">
        <LatestWorkGrid />
      </div>
      <Footer />
    </main>
  );
}