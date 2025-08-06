"use client";
import { useEffect, useState } from "react";

export default function Comments({ newsId }: { newsId: string }) {
  const [comments, setComments] = useState<any[]>([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/api/comment?newsId=${newsId}`)
      .then(res => res.json())
      .then(setComments);
  }, [newsId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newsId, content })
    });
    setContent("");
    fetch(`/api/comment?newsId=${newsId}`)
      .then(res => res.json())
      .then(setComments);
  };

  return (
    <section className="mt-8">
      <h3 className="text-lg font-bold mb-2">评论</h3>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="写下你的评论..."
          className="border rounded px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">提交</button>
      </form>
      <ul className="space-y-2">
        {comments.map((c, i) => (
          <li key={i} className="bg-gray-50 p-2 rounded">{c.content}</li>
        ))}
      </ul>
    </section>
  );
}
