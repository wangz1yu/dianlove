"use client";
import { useState } from "react";

export default function User() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });
    setUsername("");
  };

  const handleQuery = async () => {
    const res = await fetch(`/api/user?username=${encodeURIComponent(username)}`);
    const data = await res.json();
    setUser(data);
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">用户中心</h1>
      <form onSubmit={handleRegister} className="mb-4 flex gap-2">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="输入用户名注册..."
          className="border rounded px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">注册</button>
      </form>
      <button onClick={handleQuery} className="bg-gray-600 text-white px-4 py-2 rounded mb-4">查询用户</button>
      {user && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">用户名：{user.username}</h2>
        </div>
      )}
    </main>
  );
}
