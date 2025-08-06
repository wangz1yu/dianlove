import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">搜索新闻</h1>
      <form onSubmit={handleSearch} className="mb-8 flex gap-4">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="输入关键词..."
          className="border rounded px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">搜索</button>
      </form>
      <ul className="space-y-4">
        {results.map((item) => (
          <li key={item._id} className="p-4 bg-white rounded shadow hover:bg-blue-50 transition-colors duration-200">
            <a href={`/news/${item.id}`} className="text-xl font-semibold text-blue-600">{item.title}</a>
            <p className="text-gray-600 mt-2">{item.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
