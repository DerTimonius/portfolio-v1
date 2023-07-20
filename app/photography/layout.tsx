import Link from 'next/link';

export const metadata = {
  title: 'DerTimonius',
  description: 'Portfolio of photographer Timon Jurschitsch',
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {' '}
        <main data-theme="lofi" className="min-h-screen min-w-full bg-base-100">
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <details className="dropdown">
                <summary className="m-1 btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <Link href="/photography/landscape">Landscape</Link>
                  </li>
                  <li>
                    <Link href="/photography/abstract">Abstract</Link>
                  </li>
                  <li>
                    <Link href="/">Back to main menu</Link>
                  </li>
                </ul>
              </details>
            </div>
            <div className="flex-1">
              <Link
                className="btn btn-ghost normal-case text-xl"
                href="/photography"
              >
                DerTimonius Photography
              </Link>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
