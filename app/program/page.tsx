import Link from 'next/link';

const weeks = [
  { number: 1, title: 'Foundations' },
  { number: 2, title: 'Environment & Focus' },
  { number: 3, title: 'Long Leash Work' },
  { number: 4, title: 'Off-Leash Recall' },
  { number: 5, title: 'Trust-Based Challenges' },
  { number: 6, title: 'Freedom Maintenance' },
];

export default function ProgramPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Training Program</h1>
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