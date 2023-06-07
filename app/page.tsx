import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex flex-row w-full min-h-screen items-center">
      <div className="flex flex-col justify-center w-[50%] min-h-screen items-center bg-base-100">
        <h3 className="p-4 text-xl text-secondary-content">DerTimonius</h3>
        <button className="btn btn-outline btn-primary">
          <Link href="/dev">The developer</Link>
        </button>
      </div>
      <div
        data-theme="garden"
        className="flex flex-col w-[50%] justify-center items-center min-h-screen bg-base-100"
      >
        <h3 className="p-4 text-xl text-base-content">DerTimonius</h3>
        <button className="btn btn-outline btn-ghost">
          <Link href="/photography">The photographer</Link>
        </button>
      </div>
    </main>
  );
}
