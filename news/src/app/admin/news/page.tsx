"use client";
import { useEffect, useState } from "react";

export default function AdminNews() {
  const [news, setNews] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    fetch('/api/news').then(res => res.json()).then(setNews);
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/admin/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, summary })
    });
    setTitle("");
    setSummary("");
    fetch('/api/news').then(res => res.json()).then(setNews);
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">新闻管理</h1>
      <form onSubmit={handleAdd} className="mb-8 flex gap-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="新闻标题"
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="text"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          placeholder="新闻摘要"
          className="border rounded px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">添加新闻</button>
      </form>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="text-xl font-semibold text-blue-600">{item.title}</div>
              <div className="text-gray-600 mt-2">{item.summary}</div>
            </div>
            {/* 后续可添加删除/编辑功能 */}
          </li>
        ))}
      </ul>
    </main>
  );
}
