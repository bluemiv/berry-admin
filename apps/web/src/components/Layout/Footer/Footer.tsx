import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-[60px] flex gap-md">
      <div></div>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
        </ul>
      </nav>
      <div></div>
    </footer>
  );
}
