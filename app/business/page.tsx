"use client";
import React, { useEffect } from 'react';

export default function BusinessPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.business-card');
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
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#2e7cf6', marginBottom: 32 }}>产品服务</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          <div className="business-card" style={{ background: '#e6f7ff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>薪酬管理</h2>
            <p style={{ fontSize: 17 }}>支持企业薪酬核算、发放、个税自动申报，流程高效合规。</p>
          </div>
          <div className="business-card" style={{ background: '#e6f7ff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>社保公积金</h2>
            <p style={{ fontSize: 17 }}>一键管理社保公积金，数据同步，合规申报，降低企业风险。</p>
          </div>
          <div className="business-card" style={{ background: '#e6f7ff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px #b3d8ff', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s', cursor: 'pointer', opacity: 1 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #b3d8ff';
            }}>
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>灵活用工</h2>
            <p style={{ fontSize: 17 }}>灵活用工合规结算，支持多种用工模式，助力企业降本增效。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
