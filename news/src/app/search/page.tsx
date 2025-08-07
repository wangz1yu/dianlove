"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just simulate search results
    const mockResults = [
      {
        _id: "1",
        id: "1",
        title: "搜索结果示例 - 灵活用工政策解读",
        summary: "这是一个搜索结果示例，展示相关的灵活用工政策内容。"
      },
      {
        _id: "2", 
        id: "2",
        title: "税务筹划最新动态",
        summary: "最新的税务筹划政策和实施细则。"
      }
    ];
    setResults(mockResults);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部通知栏 */}
      <div className="bg-[#2a3447] py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-white">
          <div className="flex items-center space-x-6">
            <span>专业的一站式平台</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>全国化服务</span>
              <span>|</span>
              <Link href="#" className="hover:text-blue-300">企业登录</Link>
            </div>
            <span>400-0880-104</span>
          </div>
        </div>
      </div>

      {/* 主导航 */}
      <header className="gradient-bg text-white">
        <nav className="py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="https://ext.same-assets.com/1093432607/579712723.png" 
                  alt="节薪云" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-white">
              <Link href="/" className="hover:text-blue-300 transition-colors text-white">灵活用工</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors text-white">热门服务</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors text-white">行业解决方案</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors text-white">服务与支持</Link>
              <Link href="/news" className="hover:text-blue-300 transition-colors text-white">税筹资讯</Link>
              <Link href="/about" className="hover:text-blue-300 transition-colors text-white">关于平台</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜索..." 
                  className="px-4 py-2 rounded-lg text-gray-800 w-48 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">搜索税筹资讯</h1>
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="输入关键词..."
                className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                搜索
              </button>
            </div>
          </form>
          
          {results.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">搜索结果</h2>
              {results.map((item) => (
                <article key={item._id} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <Link href={`/news/${item.id}`} className="block">
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.summary}</p>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4">热门服务</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>灵活用工</p>
                <p>税务服务</p>
                <p>个人独资企业</p>
                <p>个体工商户</p>
                <p>自然人代开</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">行业解决方案</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>生产制造业</p>
                <p>网红直播行业</p>
                <p>社交电商行业</p>
                <p>生活服务行业</p>
                <p>教育培训行业</p>
                <p>配送服务行业</p>
                <p>互联网技术行业</p>
                <p>共享出行行业</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">服务与支持</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>节薪云SAAS平台</p>
                <p>员工计算器</p>
                <p>下载中心</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">税筹资讯</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>每日头条</p>
                <p>政策解读</p>
                <p>行业资讯</p>
                <p>专家观点</p>
                <p>劳务百科</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">关于平台</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>平台简介</p>
                <p>企业文化</p>
                <p>合作伙伴</p>
                <p>合伙人计划</p>
                <p>企业认证</p>
                <p>服务商认证</p>
                <p>在线客服</p>
                <p>联系我们</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <div className="mb-4">
              <span className="font-semibold">关注我们：</span>
              <span className="ml-4">400-0880-104</span>
            </div>
            <p className="mb-4">管理咨询：marketing@hfydmobi.com</p>
            <div className="flex justify-center space-x-4 mb-4">
              <Image 
                src="https://ext.same-assets.com/1093432607/579712723.png" 
                alt="节薪云" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </div>
            <p>Copyright © 2013 - 2022 JIEXINYUN Cloud. All Rights Reserved.<span className="ml-2">京ICP备2021019524-1</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
