"use client";
// 行业解决方案页面复刻
export default function HyjjfaPage() {
  return (
    <main>
      <h1>行业解决方案</h1>
      <ul style={{display:'flex',flexWrap:'wrap',gap:'2rem',listStyle:'none',padding:0}}>
        <li className="wow fadeInLeft" data-wow-delay="0s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon01a.png" alt="生产制造业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>生产制造业</h2>
          <p>优化用工成本，促进企业良性发展</p>
          <a href="/sczzy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.1s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon02a.png" alt="网红直播行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>网红直播行业</h2>
          <p>主播税负重，平台缺票据，合规风险高</p>
          <a href="/whzbhy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.2s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon03a.png" alt="社交电商行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>社交电商行业</h2>
          <p>缺进项票，监管压力大，佣金发放困难</p>
          <a href="/sjdshy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.3s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon04a.png" alt="生活服务行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>生活服务行业</h2>
          <p>人员流动大，佣金发放难，易产生劳资纠纷</p>
          <a href="/shfwhy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.4s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon05a.png" alt="教育培训行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>教育培训行业</h2>
          <p>用工合规难，佣金发放难，获取票据难</p>
          <a href="/jypxhy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.5s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon06a.png" alt="配送服务行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>配送服务行业</h2>
          <p>经营模式混杂，难获入账凭证，人员流动性大</p>
          <a href="/psfwhy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.6s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon07a.png" alt="互联网技术行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>互联网技术行业</h2>
          <p>临时用工多，支出无票，财税合规难</p>
          <a href="/hlwjshy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.7s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon08a.png" alt="共享出行行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>共享出行行业</h2>
          <p>人资管理模式陈旧，易产生劳资纠纷</p>
          <a href="/gxcxhy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.8s" style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/v_icon09a.png" alt="自媒体行业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>自媒体行业</h2>
          <p>税负压力大，人员流动，发薪困难，支出无票</p>
          <a href="/zmthy/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
      </ul>
      {/* 动效与图片后续补充，支持 wow.js、swiper.js 等动画库 */}
    </main>
  );
}
