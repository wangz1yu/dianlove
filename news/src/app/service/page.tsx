import React, { useEffect } from 'react';

export default function ServicePage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, idx) => {
      (card as HTMLDivElement).style.opacity = '0';
      (card as HTMLDivElement).style.transform = 'translateY(40px)';
      setTimeout(() => {
        (card as HTMLDivElement).style.transition = 'opacity 0.6s, transform 0.6s';
        (card as HTMLDivElement).style.opacity = '1';
        (card as HTMLDivElement).style.transform = 'translateY(0)';
      }, 200 + idx * 200);
    });
  }, []);
  return (
    <main style={{ fontFamily: 'PingFang SC, Microsoft YaHei, Arial, sans-serif', background: '#f6f8fa', minHeight: '100vh' }}>
      <section style={{ maxWidth: 1100, margin: '48px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #eee', padding: 40 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#2e7cf6', marginBottom: 32 }}>客户案例</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          <div className="service-card" style={{ background: '#fffbe6', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>知名制造企业</h2>
            <p style={{ fontSize: 17 }}>为大型制造企业提供薪酬管理与用工合规服务，客户满意度高。</p>
          </div>
          <div className="service-card" style={{ background: '#fffbe6', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>互联网企业</h2>
            <p style={{ fontSize: 17 }}>助力互联网企业灵活用工与薪酬数字化转型，提升管理效率。</p>
          </div>
          <div className="service-card" style={{ background: '#fffbe6', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>服务业客户</h2>
            <p style={{ fontSize: 17 }}>为服务业客户定制薪酬与用工管理方案，助力企业降本增效。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
