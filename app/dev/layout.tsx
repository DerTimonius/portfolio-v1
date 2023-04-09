import Link from 'next/link';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-3 gap-4 min-h-screen min-w-full bg-slate-900">
      <div></div>
      <div className="flex flex-col min-h-screen min-w-full items-middle justify-center">
        <div className="flex flex-col align-middle bg-gradient-to-l from-orange-900 to-yellow-400 rounded-lg">
          <div className="flex flex-col rounded-sm bg-slate-900 p-4 m-2 min-h-[360px] text-white box-decoration-clone">
            <ul className="flex flex-row justify-evenly list-none mb-3 border-b-0">
              <li>
                <Link
                  href="/dev/open-source"
                  className="font-medium uppercase block my-2 border-b-2 border-b-blue-400"
                >
                  open source
                </Link>
              </li>
              <li>
                <Link
                  href="/dev/something"
                  className="font-medium uppercase block my-2 border-b-2 border-b-orange-400"
                >
                  something
                </Link>
              </li>
              <li>
                <Link
                  href="/dev/well"
                  className="font-medium uppercase block my-2 border-b-2 border-b-green-400"
                >
                  well
                </Link>
              </li>
            </ul>
            <div>{children}</div>
          </div>
        </div>
        {/* <Link href="/dev/terminal">Terminal version</Link> */}
      </div>
      <div></div>
    </main>
  );
}
