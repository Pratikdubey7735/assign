import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 mb-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/create" passHref>
          Create Post
        </Link>
      </nav>
    </header>
  );
}