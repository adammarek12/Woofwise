import Link from 'next/link';

// Program: Total Recall - 6-lesson program for reliable recall
const weeks = [
  { number: 1, title: 'Name Game + Bond Boost' },
  { number: 2, title: 'Personalized Recall Cue' },
  { number: 3, title: 'Recall on a Long Line' },
  { number: 4, title: 'With Light Distractions' },
  { number: 5, title: 'Emergency Recall Word' },
  { number: 6, title: 'Off-Leash Simulation' },
];

export default function ProgramPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Total Recall</h1>
      <p className="text-base text-gray-700">
        A 6-lesson program to teach reliable recall in all environments.
      </p>
      <p className="text-base text-gray-700">
        Dog returns to owner when called, regardless of distractions. Training is enjoyable and personalized.
      </p>
      <ul className="space-y-2">
        {weeks.map((w) => (
          <li key={w.number}>
            <Link href={`/program/${w.number}`}>
              <a className="text-blue-600 hover:underline">
                Week {w.number}: {w.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}