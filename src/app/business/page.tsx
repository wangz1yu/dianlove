import React from 'react';

export default function BusinessPage() {
  return (
    <main style={{ fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ background: '#fff', boxShadow: '0 2px 8px #eee', padding: '16px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>合肥移动</div>
        </div>
      </header>
      <section style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 32 }}>
        <h1>业务办理</h1>
        <p>宽带办理、手机套餐、号卡申请等业务在线办理。</p>
        {/* 可补充表单或业务办理入口 */}
      </section>
      <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
        <div>© 2025 合肥移动 版权所有</div>
      </footer>
    </main>
  );
}
