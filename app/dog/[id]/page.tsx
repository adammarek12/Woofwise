import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export default async function DogProfile({ params }: any) {
  const { data: dog, error } = await supabase
    .from('dogs')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !dog) {
    return <div>Error loading dog profile: {error?.message || 'Not found'}</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{dog.name}</h1>
      {dog.profile_pic_url && (
        <img
          src={dog.profile_pic_url}
          alt={dog.name}
          className="w-32 h-32 rounded-full"
        />
      )}
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Training Level: {dog.level}</p>
      <h2 className="text-xl font-semibold">Completed Lessons</h2>
      {/* List of lessons completed can go here */}
    </div>
  );
}