import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex flex-row w-full min-h-screen items-center">
      <div className="flex flex-col justify-center w-[50%] min-h-screen items-center bg-slate-900">
        <h3 className="p-4 text-xl text-zinc-300">DerTimonius</h3>
        <Link
          href="/dev"
          className="border-2 p-2 text-lg rounded border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-slate-900 hover:scale-125 ease-in duration-150"
        >
          The developer
        </Link>
      </div>
      <div className="flex flex-col w-[50%] justify-center items-center min-h-screen bg-zinc-300">
        <h3 className="p-4 text-xl text-slate-900">DerTimonius</h3>
        <Link
          href="/photography"
          className="border-2 p-2 text-lg rounded border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-zinc-300 hover:scale-125 ease-in duration-150"
        >
          The photographer
        </Link>
      </div>
    </main>
  );
}
