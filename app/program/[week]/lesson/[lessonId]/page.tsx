import { supabase } from '@/lib/supabaseClient';

interface LessonPageProps {
  params: { week: string; lessonId: string };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = params;
  const { data: lesson, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', lessonId)
    .single();

  if (error || !lesson) {
    return <div>Error loading lesson: {error?.message || 'Not found'}</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{lesson.title}</h1>
      {lesson.video_url && (
        <video src={lesson.video_url} controls className="w-full max-w-xl" />
      )}
      <div className="prose">{lesson.text_content}</div>
      <button className="px-4 py-2 bg-green-600 text-white rounded">
        {lesson ? 'Mark Complete' : 'Start Lesson'}
      </button>
    </div>
  );
}