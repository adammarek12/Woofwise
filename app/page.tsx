import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-6">
      <h1 className="text-4xl font-bold text-center">
        Train Smarter. Go Leashless. Build Real Trust.
      </h1>
      <p className="text-lg text-center max-w-xl">
        WoofWise is a structured, multi-week dog training program designed for everyday dog owners. Enjoy smart, phased lessons that build real-world trust and behavior.
      </p>
      <Link
        href="/signup"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Start Training
      </Link>
    </div>
  );
}