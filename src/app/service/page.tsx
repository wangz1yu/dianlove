import React from 'react';

export default function ServicePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ background: '#fff', boxShadow: '0 2px 8px #eee', padding: '16px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>合肥移动</div>
        </div>
      </header>
      <section style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 32 }}>
        <h1>服务中心</h1>
        <p>在线客服、常见问题、网点查询，贴心服务保障。</p>
        {/* 可补充客服入口、FAQ、网点地图等 */}
      </section>
      <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
        <div>© 2025 合肥移动 版权所有</div>
      </footer>
    </main>
  );
}
