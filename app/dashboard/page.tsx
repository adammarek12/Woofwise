"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Dog = {
  id: string;
  name: string;
  breed: string;
  level: string | null;
  profile_pic_url: string | null;
};

export default function Dashboard() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    async function fetchDogs() {
      const { data, error } = await supabase.from('dogs').select('*');
      if (error) console.error(error);
      else setDogs(data as Dog[]);
    }
    fetchDogs();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Dogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dogs.map((dog) => (
          <Link key={dog.id} href={`/dog/${dog.id}`}>
            <a className="p-4 border rounded hover:shadow">
              {dog.profile_pic_url && (
                <img
                  src={dog.profile_pic_url}
                  alt={dog.name}
                  className="w-16 h-16 rounded-full mb-2"
                />
              )}
              <h2 className="text-lg font-semibold">{dog.name}</h2>
              <p className="text-sm">Level: {dog.level || 'Beginner'}</p>
            </a>
          </Link>
        ))}
        <Link href="/add-dog">
          <a className="p-4 border-2 border-dashed rounded flex items-center justify-center text-gray-500">
            + Add Dog
          </a>
        </Link>
      </div>
      <div className="mt-6">
        <Link href="/progress">
          <a className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            View Progress
          </a>
        </Link>
      </div>
    </div>
  );
}