"use client";
import { useEffect, useState } from "react";

export default function AdminComment() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin/comment').then(res => res.json()).then(setComments);
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/comment?id=${id}`, { method: 'DELETE' });
    fetch('/api/admin/comment').then(res => res.json()).then(setComments);
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">评论管理</h1>
      <ul className="space-y-4">
        {comments.map((c) => (
          <li key={c._id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>{c.content}</div>
            <button onClick={() => handleDelete(c._id)} className="bg-red-600 text-white px-4 py-2 rounded">删除</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
