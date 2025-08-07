"use client";
// 服务与支持页面复刻
export default function FwzcPage() {
  return (
    <main>
      <h1>服务与支持</h1>
      <ul style={{display:'flex',flexWrap:'wrap',gap:'2rem',listStyle:'none',padding:0}}>
        <li className="wow fadeInLeft" data-wow-delay="0s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/sup_icon01.png" alt="灵工计算器" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>灵工计算器</h2>
          <p>发薪金额、服务费率一键测算，助力企业高效管理</p>
          <a href="/lgjsq/" style={{color:'#0070f3'}}>立即使用</a>
        </li>
        <li className="wow fadeInLeft" data-wow-delay="0.1s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/sup_icon02.png" alt="下载中心" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>下载中心</h2>
          <p>各类资料、政策文件、工具包一站下载</p>
          <a href="/xazai/" style={{color:'#0070f3'}}>查看更多</a>
        </li>
        <li className="wow fadeInRight" data-wow-delay="0.2s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',position:'relative'}}>
          <img src="/img/arrow_icon02a.png" alt="节薪云SAAS平台" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2>节薪云灵工管理SAAS平台</h2>
          <p>Saas系统加持，打造灵活用工一站式服务</p>
          <a href="/saas/" style={{color:'#0070f3'}}>平台详情</a>
        </li>
      </ul>
      {/* 动效与图片后续补充，支持 wow.js、swiper.js 等动画库 */}
    </main>
  );
}
