import Link from 'next/link';

export default function Sidenav() {
  return (
    <div className="flex">
      {/* Side Navigation */}
      <nav className="w-40 min-h-screen border-r">
        <ul className='pt-40 pl-6'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/front">Front</Link></li>
          <li><Link href="/back">Back</Link></li>
          <li><Link href="/database">Database</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {}
      </main>
    </div>
  );
};
