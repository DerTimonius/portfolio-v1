import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-200 justify-between px-6 fixed">
      <Link className="btn" href="#">
        Main
      </Link>
      <div className="flex justify-end gap-6">
        <Link className="btn text-lg" href="#">
          Link to somewhere
        </Link>
        <Link className="btn text-lg" href="#">
          Link to somewhere
        </Link>
        <Link className="btn text-lg" href="#">
          Link to somewhere
        </Link>
        <Link className="btn text-lg" href="#">
          Link to somewhere
        </Link>
      </div>
    </nav>
  );
}
