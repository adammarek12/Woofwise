import { lessons } from '@/lib/programData';

export default function LessonPage({ params }: any) {
  const lessonNum = Number(params.lessonId);
  const lesson = lessons.find((l) => l.id === lessonNum);
  if (!lesson) {
    return <div>Error loading lesson.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{lesson.title}</h1>
      {lesson.video_url && (
        <video src={lesson.video_url} controls className="w-full max-w-xl" />
      )}
      <div className="prose">
        <p>{lesson.text_content}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Training Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {lesson.steps.map((step, idx) => (
            <li key={idx}>{step.text}</li>
          ))}
        </ol>
      </div>
      <button className="px-4 py-2 bg-green-600 text-white rounded">
        Mark Complete
      </button>
    </div>
  );
}