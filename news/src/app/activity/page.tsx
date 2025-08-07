import React, { useEffect } from 'react';

export default function ActivityPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.activity-card');
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
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#2e7cf6', marginBottom: 32 }}>解决方案</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          <div className="activity-card" style={{ background: '#f6ffed', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>制造业方案</h2>
            <p style={{ fontSize: 17 }}>针对制造业企业，提供高效薪酬核算与用工合规解决方案。</p>
          </div>
          <div className="activity-card" style={{ background: '#f6ffed', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>互联网方案</h2>
            <p style={{ fontSize: 17 }}>为互联网企业定制灵活用工与薪酬管理一体化解决方案。</p>
          </div>
          <div className="activity-card" style={{ background: '#f6ffed', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>服务业方案</h2>
            <p style={{ fontSize: 17 }}>服务业企业专属薪酬与用工管理方案，提升管理效率。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
