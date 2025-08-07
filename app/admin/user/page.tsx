"use client";
// 后台用户与权限管理页面
export default function AdminUserPage() {
  return (
    <main>
      <h1>用户与权限管理</h1>
      <section style={{margin:'2rem 0'}}>
        <p>管理后台账号、分配权限、设置安全策略。</p>
        <button style={{padding:'0.5rem 1.5rem',background:'#0070f3',color:'#fff',border:'none',borderRadius:'8px'}}>新建用户</button>
      </section>
      {/* 后续可集成用户列表、权限分配、角色管理等功能 */}
    </main>
  );
}
