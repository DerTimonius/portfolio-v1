import Career from '@/Components/Career';
import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';
import Tech from '@/Components/Tech';

export const metadata = {
  title: 'Developer DerTimonius',
  description: 'Developer portfolio of Timon Jurschitsch',
};

export default function DevPage() {
  return (
    <main data-theme="lofi" className="min-h-screen min-w-full bg-base-100">
      <Navbar />
      <HeroSection />
      <Career />
      <Tech />
    </main>
  );
}
