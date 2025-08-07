
import React, { useRef, useEffect } from 'react';

export default function HomePage() {
  const bannerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      const deg = 90 + Math.sin(step / 30) * 30;
      if (bannerRef.current) {
        bannerRef.current.style.background = `linear-gradient(${deg}deg,#2e7cf6,#00e0ff)`;
      }
    }, 50);
    // 卡片渐入动画
    const cards = document.querySelectorAll('.main-card');
    cards.forEach((card, idx) => {
      (card as HTMLDivElement).style.opacity = '0';
      (card as HTMLDivElement).style.transform = 'translateY(40px)';
      setTimeout(() => {
        (card as HTMLDivElement).style.transition = 'opacity 0.6s, transform 0.6s';
        (card as HTMLDivElement).style.opacity = '1';
        (card as HTMLDivElement).style.transform = 'translateY(0)';
      }, 300 + idx * 200);
    });
    return () => clearInterval(interval);
  }, []);
    return (
      <main style={{ fontFamily: 'PingFang SC, Microsoft YaHei, Arial, sans-serif', background: '#f6f8fa', minHeight: '100vh' }}>
        {/* 顶部导航栏 */}
        <header style={{ background: '#fff', boxShadow: '0 2px 8px #eee', padding: '16px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 'bold', fontSize: 28, color: '#2e7cf6' }}>节薪云</div>
            <nav>
              <a href="/" style={{ margin: '0 16px', color: '#2e7cf6', textDecoration: 'none', fontWeight: 500 }}>首页</a>
              <a href="/business" style={{ margin: '0 16px', color: '#333', textDecoration: 'none' }}>产品服务</a>
              <a href="/activity" style={{ margin: '0 16px', color: '#333', textDecoration: 'none' }}>解决方案</a>
              <a href="/service" style={{ margin: '0 16px', color: '#333', textDecoration: 'none' }}>客户案例</a>
              <a href="/about" style={{ margin: '0 16px', color: '#333', textDecoration: 'none' }}>关于我们</a>
            </nav>
          </div>
        </header>

        {/* Banner 动效区 */}
        <section ref={bannerRef} style={{ background: 'linear-gradient(90deg,#2e7cf6,#00e0ff)', color: '#fff', padding: '80px 0 60px', textAlign: 'center', transition: 'background 0.5s' }}>
          <h1 style={{ fontSize: 44, fontWeight: 700, marginBottom: 24 }}>节薪云——企业薪酬管理数字化平台</h1>
          <p style={{ fontSize: 22, marginTop: 0, marginBottom: 32 }}>一站式薪酬管理、个税申报、社保公积金、灵活用工解决方案</p>
        <a
          href="/business"
          style={{
            display: 'inline-block',
            background: '#fff',
            color: '#2e7cf6',
            fontWeight: 600,
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 18,
            boxShadow: '0 2px 8px #eee',
            textDecoration: 'none',
            marginTop: 16,
            transition: 'box-shadow 0.2s, background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#2e7cf6';
            (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px #b3d8ff';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
            (e.currentTarget as HTMLAnchorElement).style.color = '#2e7cf6';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px #eee';
          }}
        >立即体验</a>
        </section>

        {/* 主要模块区 */}
      <section style={{ maxWidth: 1200, margin: '40px auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
        {[{
          title: '产品服务',
          desc: '薪酬管理、个税申报、社保公积金、灵活用工等多元化服务。',
          detail: '支持企业薪酬核算、个税自动申报、社保公积金一键管理，灵活用工合规结算。',
        }, {
          title: '解决方案',
          desc: '针对不同行业和企业规模，定制高效薪酬与用工解决方案。',
          detail: '覆盖制造、互联网、服务业等多行业，满足集团、成长型企业多样需求。',
        }, {
          title: '客户案例',
          desc: '众多知名企业选择节薪云，助力数字化转型升级。',
          detail: '已服务上百家企业，客户满意度高，助力企业降本增效。',
        }].map((item, idx) => (
          <div
            key={item.title}
            className="main-card"
            style={{
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 2px 8px #eee',
              padding: 32,
              transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.6s',
              cursor: 'pointer',
              opacity: 1,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px) scale(1.03)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px #b3d8ff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px #eee';
            }}
          >
            <h2 style={{ color: '#2e7cf6', marginBottom: 12 }}>{item.title}</h2>
            <p style={{ fontSize: 18 }}>{item.desc}</p>
            <div style={{ color: '#666', fontSize: 15, marginTop: 10 }}>{item.detail}</div>
          </div>
        ))}
      </section>

        {/* 页脚 */}
        <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
          <div>© 2025 节薪云 版权所有</div>
        </footer>
      </main>
    );
}
