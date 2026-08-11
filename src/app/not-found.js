import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold text-rose-300 mb-2">404 - Page Not Found</h2>
      <p className="text-rose-200/70 mb-6">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-rose-500 text-white rounded-xl font-semibold">
        Return Home
      </Link>
    </div>
  );
}
