"use client";
// 后台内容管理页面
export default function AdminContentPage() {
  return (
    <main>
      <h1>内容管理</h1>
      <section style={{margin:'2rem 0'}}>
        <p>可编辑所有页面文案、图片、模块内容。</p>
        <button style={{padding:'0.5rem 1.5rem',background:'#0070f3',color:'#fff',border:'none',borderRadius:'8px'}}>新建内容</button>
      </section>
      {/* 后续可集成内容列表、编辑表单、富文本等功能 */}
    </main>
  );
}
