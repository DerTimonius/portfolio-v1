import HeroSection from './HeroSection';
import Navbar from './Navbar';

export const metadata = {
  title: 'Developer DerTimonius',
  description: 'Developer portfolio of Timon Jurschitsch',
};

export default function DevPage() {
  return (
    <main
      data-theme="cyberpunk"
      className="min-h-screen min-w-full bg-base-100"
    >
      <Navbar />
      <HeroSection />
      <div>Something</div>
    </main>
  );
}
