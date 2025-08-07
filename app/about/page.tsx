import React, { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.about-card');
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
      <section style={{ maxWidth: 900, margin: '48px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #eee', padding: 40 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#2e7cf6', marginBottom: 32 }}>关于我们</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          <div className="about-card" style={{ background: '#f0f6ff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>公司简介</h2>
            <p style={{ fontSize: 17 }}>节薪云专注于企业薪酬管理数字化，致力于为企业提供高效、合规的薪酬与用工解决方案。</p>
          </div>
          <div className="about-card" style={{ background: '#f0f6ff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>核心团队</h2>
            <p style={{ fontSize: 17 }}>团队成员来自知名互联网与人力资源企业，具备丰富的行业经验和技术实力。</p>
          </div>
          <div className="about-card" style={{ background: '#f0f6ff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>联系方式</h2>
            <p style={{ fontSize: 17 }}>邮箱：contact@jiexinyun.com<br/>电话：400-123-4567</p>
          </div>
        </div>
      </section>
    </main>
  );
}
