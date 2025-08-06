"use client";
import { useEffect, useState } from "react";

export default function AdminUser() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin/user').then(res => res.json()).then(setUsers);
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/user?id=${id}`, { method: 'DELETE' });
    fetch('/api/admin/user').then(res => res.json()).then(setUsers);
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">用户管理</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user._id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div className="text-xl">{user.username}</div>
            <button onClick={() => handleDelete(user._id)} className="bg-red-600 text-white px-4 py-2 rounded">删除</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
