"use client";
// 税筹资讯页面复刻
export default function NewsPage() {
  return (
    <main>
      <h1>税筹资讯</h1>
      <ul style={{display:'flex',flexWrap:'wrap',gap:'2rem',listStyle:'none',padding:0}}>
        <li className="wow fadeInLeft" data-wow-delay="0s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>每日头条</h2>
          <p>最新行业动态、政策解读、平台新闻</p>
          <a href="/mrtt/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.1s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>灵工知识库</h2>
          <p>灵活用工相关知识、结算、发票、个税等</p>
          <a href="/lgzsk/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.2s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>税务知识</h2>
          <p>税务政策、合规解读、实操指南</p>
          <a href="/swzs/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.3s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>行业资讯</h2>
          <p>行业发展趋势、企业案例、市场分析</p>
          <a href="/hyzx/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.4s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>政策解读</h2>
          <p>最新政策法规、权威解读、实务操作</p>
          <a href="/zcjd/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.5s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>专家观点</h2>
          <p>行业专家深度分析、热点话题</p>
          <a href="/zjgd/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.6s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>行业案例</h2>
          <p>典型企业案例、灵活用工实践分享</p>
          <a href="/hyal/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.7s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>劳务百科</h2>
          <p>劳务相关知识、实用技巧、常见问题</p>
          <a href="/lwbk/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
      </ul>
      {/* 动效与图片后续补充，支持 wow.js、swiper.js 等动画库 */}
    </main>
  );
}
