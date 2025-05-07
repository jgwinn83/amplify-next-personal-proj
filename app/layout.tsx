import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-gradient-to-b from-[#7551c2] to-white">
        <nav className="w-full bg-white shadow-md py-4">
        <div className="flex justify-center space-x-6">
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/wishlist">Wish List</Link>
          </div>
        </nav>

        <main className="flex-1 p-4 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
