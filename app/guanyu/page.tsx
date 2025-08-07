"use client";
// 关于平台页面复刻
export default function GuanyuPage() {
  return (
    <main>
      <h1>关于平台</h1>
      <ul style={{display:'flex',flexWrap:'wrap',gap:'2rem',listStyle:'none',padding:0}}>
        <li className="wow fadeInUp" data-wow-delay="0s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>平台简介</h2>
          <p>节薪云灵活用工平台，专注企业财税服务</p>
          <a href="/jianjie/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.1s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>企业文化</h2>
          <p>诚信、创新、专业、共赢</p>
          <a href="/wenhua/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.2s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>合作伙伴</h2>
          <p>遍布全国的合作企业与服务商</p>
          <a href="/huoban/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.3s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>合伙人计划</h2>
          <p>开放合作，共享平台红利</p>
          <a href="/hehuoren/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.4s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>企业入驻</h2>
          <p>企业快速入驻，享受平台服务</p>
          <a href="/qyrz/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.5s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>服务商入驻</h2>
          <p>服务商入驻，拓展业务渠道</p>
          <a href="/fwsrz/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.6s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>招贤纳士</h2>
          <p>诚邀优秀人才加入，共创未来</p>
          <a href="/zxns/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
        <li className="wow fadeInUp" data-wow-delay="0.7s" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee'}}>
          <h2>联系我们</h2>
          <p>服务热线：400-0880-104<br/>邮箱：markting@hfydmobi.com</p>
          <a href="/lianxi/" style={{color:'#0070f3'}}>查看详情</a>
        </li>
      </ul>
      {/* 动效与图片后续补充，支持 wow.js、swiper.js 等动画库 */}
    </main>
  );
}
