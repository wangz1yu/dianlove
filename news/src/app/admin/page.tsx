"use client";
import { useState } from "react";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.success) setLoggedIn(true);
    else alert('登录失败');
  };

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">后台管理</h1>
      {!loggedIn ? (
        <form onSubmit={handleLogin} className="mb-8 flex gap-4">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="管理员用户名"
            className="border rounded px-4 py-2 w-full"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="密码"
            className="border rounded px-4 py-2 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">登录</button>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">欢迎，管理员！</h2>
          <ul className="space-y-4">
            <li><a href="/admin/news" className="text-blue-600 underline">新闻管理</a></li>
            <li><a href="/admin/user" className="text-blue-600 underline">用户管理</a></li>
            <li><a href="/admin/comment" className="text-blue-600 underline">评论管理</a></li>
          </ul>
        </div>
      )}
    </main>
  );
}
