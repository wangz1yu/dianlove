import Link from "next/link";
import Image from "next/image";

export default function NewsList() {
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
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="hover:text-blue-300 transition-colors">灵活用工</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">热门服务</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">行业解决方案</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">服务与支持</Link>
              <Link href="/news" className="text-blue-300">税筹资讯</Link>
              <Link href="/about" className="hover:text-blue-300 transition-colors">关于平台</Link>
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

      {/* 税筹资讯内容 */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">汇聚税筹热点资讯</h1>
            <p className="text-xl text-gray-600">
              为您提供最新的税务政策、行业动态和专业解读
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* 左侧分类导航 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-4">资讯分类</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 rounded bg-blue-600 text-white">
                    每日头条
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    政策解读
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    行业资讯
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    专家观点
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    劳务百科
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    行业案例
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧内容区域 */}
            <div className="lg:col-span-3">
              {/* 搜索栏 */}
              <div className="mb-8">
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="搜索资讯内容..." 
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                    搜索
                  </button>
                </div>
              </div>

              {/* 资讯列表 */}
              <div className="space-y-6">
                <article className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                        24人欠缴社保，灵活用工平台才是王道？
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">2025-01-06</p>
                      <p className="text-gray-700 line-clamp-3">
                        随着经济形势的变化和用工模式的创新，越来越多的企业开始关注灵活用工模式。本文深入分析了社保缴纳问题与灵活用工平台的优势，为企业提供合规的用工解决方案...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded">每日头条</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">政策解读</span>
                    </div>
                    <Link href="/news/1" className="text-blue-600 hover:text-blue-700">
                      阅读全文 →
                    </Link>
                  </div>
                </article>

                <article className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                        承包费遵，灵活用工委托将提2040年中国均价
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">2025-01-05</p>
                      <p className="text-gray-700 line-clamp-3">
                        国家税务总局最新发布的政策文件显示，灵活用工行业将迎来新的发展机遇。专家预测，到2040年，中国灵活用工市场将达到新的高度，为企业和个人提供更多选择...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded">行业资讯</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded">专家观点</span>
                    </div>
                    <Link href="/news/2" className="text-blue-600 hover:text-blue-700">
                      阅读全文 →
                    </Link>
                  </div>
                </article>

                <article className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                        自营免分改（四众团队节奏运营资源解决？
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">2025-01-04</p>
                      <p className="text-gray-700 line-clamp-3">
                        针对企业在灵活用工实施过程中遇到的常见问题，本文整理了最新的政策指导和实践案例，帮助企业更好地理解和运用灵活用工模式，实现降本增效的目标...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded">劳务百科</span>
                    </div>
                    <Link href="/news/3" className="text-blue-600 hover:text-blue-700">
                      阅读全文 →
                    </Link>
                  </div>
                </article>

                <article className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                        2025年大津客服提现代管企业灵活管理
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">2025-01-03</p>
                      <p className="text-gray-700 line-clamp-3">
                        随着数字化转型的深入，企业对灵活用工管理的需求日益增长。本文分析了当前市场上主流的管理解决方案，为企业选择合适的平台提供参考依据...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded">行业案例</span>
                    </div>
                    <Link href="/news/4" className="text-blue-600 hover:text-blue-700">
                      阅读全文 →
                    </Link>
                  </div>
                </article>
              </div>

              {/* 分页 */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    上一页
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    下一页
                  </button>
                </div>
              </div>
            </div>
          </div>
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
