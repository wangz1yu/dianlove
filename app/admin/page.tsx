"use client";
// 后台管理首页，后续将集成内容管理、权限、模块编辑等
export default function AdminPage() {
  return (
    <main>
      <h1>后台管理系统</h1>
      <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',marginTop:'2rem'}}>
        <a href="/admin/content" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',textDecoration:'none',color:'#222'}}>
          <h2>内容管理</h2>
          <p>管理所有页面内容、文案、图片</p>
        </a>
        <a href="/admin/nav" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',textDecoration:'none',color:'#222'}}>
          <h2>导航与模块管理</h2>
          <p>自定义导航栏、模块顺序与分组</p>
        </a>
        <a href="/admin/industry" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',textDecoration:'none',color:'#222'}}>
          <h2>行业方案管理</h2>
          <p>行业解决方案内容维护</p>
        </a>
        <a href="/admin/news" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',textDecoration:'none',color:'#222'}}>
          <h2>资讯管理</h2>
          <p>新闻、头条、百科等内容管理</p>
        </a>
        <a href="/admin/user" style={{flex:'1 1 320px',background:'#f7f7f7',borderRadius:'16px',padding:'2rem',boxShadow:'0 2px 12px #eee',textDecoration:'none',color:'#222'}}>
          <h2>用户与权限管理</h2>
          <p>后台账号、权限分配与安全</p>
        </a>
      </div>
      {/* 后续补充具体管理功能与操作界面 */}
    </main>
  );
}
