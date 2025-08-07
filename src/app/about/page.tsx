import React from 'react';

export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ background: '#fff', boxShadow: '0 2px 8px #eee', padding: '16px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>合肥移动</div>
        </div>
      </header>
      <section style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 32 }}>
        <h1>关于我们</h1>
        <p>合肥移动官方服务平台，致力于为用户提供优质通信服务与贴心客户体验。</p>
        {/* 可补充企业介绍、联系方式等 */}
      </section>
      <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
        <div>© 2025 合肥移动 版权所有</div>
      </footer>
    </main>
  );
}
