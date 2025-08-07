"use client";
// 热门服务页面复刻
export default function RmfwPage() {
  return (
    <main>
      {/* 动画库集成 wow.js，页面美化与交互提示 */}
      <script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js"></script>
      <script dangerouslySetInnerHTML={{__html:`new WOW().init();`}} />
      <h1 style={{textAlign:'center',fontSize:'2.2rem',fontWeight:700,margin:'2rem 0',color:'#0070f3',letterSpacing:'2px'}}>热门服务</h1>
      <ul style={{
        display:'flex',flexWrap:'wrap',gap:'2rem',listStyle:'none',padding:0,justifyContent:'center',
        maxWidth:'1200px',margin:'0 auto',
      }}>
        {[{
          icon:'/img/ser_icon01a.png',title:'灵活用工',desc:'改变传统用工模式，按需雇佣人才，为企业降本增效',link:'/lhyg/',delay:'0s'
        },{
          icon:'/img/ser_icon02a.png',title:'税筹服务',desc:'享园区更多税收优惠，有效降低企业税负',link:'/scfw/',delay:'0.1s'
        },{
          icon:'/img/ser_icon03a.png',title:'个人独资企业',desc:'转变收入性质，同时合理降低税负',link:'/grdzqy/',delay:'0.2s'
        },{
          icon:'/img/ser_icon04a.png',title:'个体工商户',desc:'帮助创业者在线注册&管理个体户',link:'/grgsh/',delay:'0.3s'
        },{
          icon:'/img/ser_icon05a.png',title:'自然人代开',desc:'按次申报，一票清税，提供个人财税代办服务',link:'/zrrdk/',delay:'0.4s'
        }].map((item,i)=>(
          <li
            key={item.title}
            className="wow fadeInUp card-hover"
            data-wow-delay={item.delay}
            style={{
              flex:'1 1 260px',
              background:'linear-gradient(135deg,#f7f7f7 80%,#e0e7ef 100%)',
              borderRadius:'18px',
              padding:'2rem',
              boxShadow:'0 4px 24px #e0e7ef',
              position:'relative',
              overflow:'hidden',
              transition:'transform 0.3s, box-shadow 0.3s',
              cursor:'pointer',
              minWidth:'220px',
              maxWidth:'320px',
            }}
            onMouseEnter={e=>{
              e.currentTarget.style.transform='translateY(-10px) scale(1.04)';
              e.currentTarget.style.boxShadow='0 8px 32px #b3c6e0';
              const img = e.currentTarget.querySelector('img');
              if(img) img.style.opacity='0.28',img.style.transform='scale(1.18)';
            }}
            onMouseLeave={e=>{
              e.currentTarget.style.transform='translateY(0) scale(1)';
              e.currentTarget.style.boxShadow='0 4px 24px #e0e7ef';
              const img = e.currentTarget.querySelector('img');
              if(img) img.style.opacity='0.15',img.style.transform='scale(1)';
            }}
          >
            <img src={item.icon} alt={item.title} style={{width:'48px',height:'48px',position:'absolute',top:'2rem',right:'2rem',opacity:0.15,transition:'all 0.3s'}} />
            <h2 style={{marginBottom:'0.5rem',fontWeight:600,fontSize:'1.18rem',color:'#222'}}>{item.title}</h2>
            <p style={{color:'#555',minHeight:'2.2em'}}>{item.desc}</p>
            <a href={item.link} style={{color:'#0070f3',fontWeight:600,marginTop:'1rem',display:'inline-block',transition:'color 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.color='#0051a8'}
              onMouseLeave={e=>e.currentTarget.style.color='#0070f3'}
            >查看详情</a>
          </li>
        ))}
      </ul>
      <div style={{marginTop:'3rem',textAlign:'center'}}>
        <span style={{
          fontSize:'1.2rem',color:'#888',background:'linear-gradient(90deg,#e0e7ef 0%,#f7f7f7 100%)',
          padding:'0.6rem 1.6rem',borderRadius:'8px',boxShadow:'0 2px 8px #eee',
          display:'inline-block',
        }}>
          2025年平台月度综合交易量 <b style={{color:'#0070f3'}}>26.8亿+</b>
        </span>
        <div style={{marginTop:'2rem'}}>
          <button
            style={{
              padding:'0.8rem 2.2rem',background:'linear-gradient(90deg,#0070f3 60%,#00c6fb 100%)',
              color:'#fff',border:'none',borderRadius:'8px',fontSize:'1.1rem',
              boxShadow:'0 2px 12px #b3c6e0',cursor:'pointer',fontWeight:600,transition:'all 0.2s',
            }}
            onMouseEnter={e=>{
              e.currentTarget.style.background='linear-gradient(90deg,#0051a8 60%,#00c6fb 100%)';
              e.currentTarget.style.boxShadow='0 4px 18px #0070f3';
            }}
            onMouseLeave={e=>{
              e.currentTarget.style.background='linear-gradient(90deg,#0070f3 60%,#00c6fb 100%)';
              e.currentTarget.style.boxShadow='0 2px 12px #b3c6e0';
            }}
            onClick={()=>alert('欢迎体验热门服务！')}
          >在线体验</button>
        </div>
      </div>
      {/* 响应式支持 */}
      <style>{`
        @media (max-width: 900px) {
          ul {gap:1rem;}
          ul li {min-width:180px;max-width:100%;padding:1.2rem;}
        }
        @media (max-width: 600px) {
          ul {flex-direction:column;align-items:center;}
          ul li {width:90vw;min-width:120px;max-width:98vw;}
        }
      `}</style>
    </main>
  );
}
