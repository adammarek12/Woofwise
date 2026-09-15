"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AddDog() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return setError('Not authenticated');
    const { error } = await supabase.from('dogs').insert([{ user_id: user.id, name, breed, age: Number(age), level: 'Beginner' }]);
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
      <h1 className="text-2xl font-bold">Add a New Dog</h1>
      <form onSubmit={handleAdd} className="space-y-2">
        <input
          type="text"
          placeholder="Dog's Name"
          className="w-64 px-3 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Breed"
          className="w-64 px-3 py-2 border rounded"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-64 px-3 py-2 border rounded"
          value={age}
          onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Dog
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}