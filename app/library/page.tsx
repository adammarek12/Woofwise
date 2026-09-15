export default function LibraryPage() {
  const filters = ['Indoor', 'Outdoor', 'Social', 'Behavioral'];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Ongoing Learning Library</h1>
      <div className="flex space-x-2">
        {filters.map((filter) => (
          <button key={filter} className="px-3 py-1 border rounded">
            {filter}
          </button>
        ))}
      </div>
      <p>Lesson list coming soon...</p>
    </div>
  );
}