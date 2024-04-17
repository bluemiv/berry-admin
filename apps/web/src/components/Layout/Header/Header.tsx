import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[60px] flex gap-md">
      <div></div>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}
