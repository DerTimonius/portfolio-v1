'use client';
import Link from 'next/link';

export default function Navbar() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar bg-base-200 justify-between px-6 fixed z-20">
      <button className="btn" onClick={handleClick}>
        Main
      </button>
      <div className="flex justify-end gap-6">
        <Link className="btn text-lg" href="/dev/#career" scroll={false}>
          Career
        </Link>
        <Link className="btn text-lg" href="/dev/#tech" scroll={false}>
          Tech Stack
        </Link>
        <Link className="btn text-lg" href="/dev/#open-source" scroll={false}>
          Open Source
        </Link>
        <Link className="btn text-lg" href="/photography">
          Photography
        </Link>
      </div>
    </nav>
  );
}
