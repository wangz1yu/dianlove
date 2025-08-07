"use client";
// 热门服务页面复刻
export default function RmfwPage() {
  return (
    <main>
      {/* 动画库集成 wow.js，页面美化与交互提示 */}
      <script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js"></script>
      <script dangerouslySetInnerHTML={{__html:`new WOW().init();`}} />
      <h1 style={{textAlign:'center',fontSize:'2.2rem',fontWeight:700,margin:'2rem 0',color:'#0070f3',letterSpacing:'2px'}}>热门服务</h1>
      <ul style={{display:'flex',flexWrap:'wrap',gap:'2rem',listStyle:'none',padding:0,justifyContent:'center'}}>
        <li style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 4px 24px #e0e7ef',position:'relative',overflow:'hidden',transition:'transform 0.3s',cursor:'pointer'}} className="wow fadeInUp card-hover" data-wow-delay="0s"
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px) scale(1.03)'}
          onMouseLeave={e=>e.currentTarget.style.transform='translateY(0) scale(1)'}>
          <img src="/img/ser_icon01a.png" alt="灵活用工" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2 style={{marginBottom:'0.5rem'}}>灵活用工</h2>
          <p style={{color:'#555'}}>改变传统用工模式，按需雇佣人才，为企业降本增效</p>
          <a href="/lhyg/" style={{color:'#0070f3',fontWeight:600,marginTop:'1rem',display:'inline-block'}}>查看详情</a>
        </li>
        <li style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 4px 24px #e0e7ef',position:'relative',overflow:'hidden',transition:'transform 0.3s',cursor:'pointer'}} className="wow fadeInUp card-hover" data-wow-delay="0.1s"
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px) scale(1.03)'}
          onMouseLeave={e=>e.currentTarget.style.transform='translateY(0) scale(1)'}>
          <img src="/img/ser_icon02a.png" alt="税筹服务" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2 style={{marginBottom:'0.5rem'}}>税筹服务</h2>
          <p style={{color:'#555'}}>享园区更多税收优惠，有效降低企业税负</p>
          <a href="/scfw/" style={{color:'#0070f3',fontWeight:600,marginTop:'1rem',display:'inline-block'}}>查看详情</a>
        </li>
        <li style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 4px 24px #e0e7ef',position:'relative',overflow:'hidden',transition:'transform 0.3s',cursor:'pointer'}} className="wow fadeInUp card-hover" data-wow-delay="0.2s"
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px) scale(1.03)'}
          onMouseLeave={e=>e.currentTarget.style.transform='translateY(0) scale(1)'}>
          <img src="/img/ser_icon03a.png" alt="个人独资企业" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2 style={{marginBottom:'0.5rem'}}>个人独资企业</h2>
          <p style={{color:'#555'}}>转变收入性质，同时合理降低税负</p>
          <a href="/grdzqy/" style={{color:'#0070f3',fontWeight:600,marginTop:'1rem',display:'inline-block'}}>查看详情</a>
        </li>
        <li style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 4px 24px #e0e7ef',position:'relative',overflow:'hidden',transition:'transform 0.3s',cursor:'pointer'}} className="wow fadeInUp card-hover" data-wow-delay="0.3s"
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px) scale(1.03)'}
          onMouseLeave={e=>e.currentTarget.style.transform='translateY(0) scale(1)'}>
          <img src="/img/ser_icon04a.png" alt="个体工商户" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2 style={{marginBottom:'0.5rem'}}>个体工商户</h2>
          <p style={{color:'#555'}}>帮助创业者在线注册&管理个体户</p>
          <a href="/grgsh/" style={{color:'#0070f3',fontWeight:600,marginTop:'1rem',display:'inline-block'}}>查看详情</a>
        </li>
        <li style={{flex:'1 1 260px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 4px 24px #e0e7ef',position:'relative',overflow:'hidden',transition:'transform 0.3s',cursor:'pointer'}} className="wow fadeInUp card-hover" data-wow-delay="0.4s"
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px) scale(1.03)'}
          onMouseLeave={e=>e.currentTarget.style.transform='translateY(0) scale(1)'}>
          <img src="/img/ser_icon05a.png" alt="自然人代开" style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15}} />
          <h2 style={{marginBottom:'0.5rem'}}>自然人代开</h2>
          <p style={{color:'#555'}}>按次申报，一票清税，提供个人财税代办服务</p>
          <a href="/zrrdk/" style={{color:'#0070f3',fontWeight:600,marginTop:'1rem',display:'inline-block'}}>查看详情</a>
        </li>
      </ul>
      <div style={{marginTop:'3rem',textAlign:'center'}}>
        <span style={{fontSize:'1.2rem',color:'#888'}}>2025年平台月度综合交易量 <b style={{color:'#0070f3'}}>26.8亿+</b></span>
        <div style={{marginTop:'2rem'}}>
          <button style={{padding:'0.8rem 2.2rem',background:'#0070f3',color:'#fff',border:'none',borderRadius:'8px',fontSize:'1.1rem',boxShadow:'0 2px 8px #eee',cursor:'pointer'}} onClick={()=>alert('欢迎体验热门服务！')}>在线体验</button>
        </div>
      </div>
    </main>
  );
}
