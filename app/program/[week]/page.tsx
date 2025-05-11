import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

interface WeekPageProps {
  params: { week: string };
}

export default async function WeekPage({ params }: WeekPageProps) {
  const weekNum = Number(params.week);
  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('id, title')
    .eq('week_number', weekNum)
    .order('id');

  if (error) {
    return <div>Error loading lessons: {error.message}</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Week {weekNum}</h1>
      <ul className="space-y-2">
        {lessons?.map((lesson) => (
          <li key={lesson.id}>
            <Link href={`/program/${weekNum}/lesson/${lesson.id}`}>
              <a className="text-blue-600 hover:underline">{lesson.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}