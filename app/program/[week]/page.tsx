import Link from 'next/link';
import { lessons } from '@/lib/programData';

export default function WeekPage({ params }: any) {
  const weekNum = Number(params.week);
  const lesson = lessons.find((l) => l.id === weekNum);
  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        Week {weekNum}: {lesson.title}
      </h1>
      <ul className="space-y-2">
        <li key={lesson.id}>
          <Link href={`/program/${weekNum}/lesson/${lesson.id}`}>
            <a className="text-blue-600 hover:underline">{lesson.title}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}