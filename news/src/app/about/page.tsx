import Link from "next/link";
import Image from "next/image";

export default function About() {
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
              <Link href="/news" className="hover:text-blue-300 transition-colors">税筹资讯</Link>
              <Link href="/about" className="text-blue-300">关于平台</Link>
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

      {/* 关于平台内容 */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">关于节薪云平台</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              节薪云致力于全业务本地化的专业财税服务平台，专注于灵活用工场景下的共享经济平台
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">平台简介</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  节薪云是一个专业的灵活用工平台，为企业和个人提供全方位的财税服务解决方案。
                  我们致力于改变传统用工模式，通过数据聚合和人才整合，为企业提供高效的税务减负服务。
                </p>
                <p>
                  平台拥有完整的灵活用工生态链，包括灵活代发、个税代缴、正规平台认证、合法合规保障等核心服务，
                  为40000+企业及项目提供结算合作，累计服务1500万人次+，处理总结算金额超过300亿。
                </p>
                <p>
                  我们坚持"权威平台、安全保障、业务稳定、7x24小时服务"的服务理念，
                  为客户提供99%+的一站式服务满意度体验。
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">核心优势</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">专业财税服务</h3>
                    <p className="text-gray-600">拥有专业的财税团队，提供合规、高效的税务筹划服务</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">安全可靠平台</h3>
                    <p className="text-gray-600">正规平台认证，全程合法合规，保障用户资金安全</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">全程化服务</h3>
                    <p className="text-gray-600">从咨询到结算，提供一站式全程化服务体验</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-orange-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">技术创新</h3>
                    <p className="text-gray-600">运用先进技术手段，提供智能化的服务解决方案</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 企业文化 */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">企业文化</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">诚信</h3>
                <p className="text-gray-600">以诚待人，以信立业，建立长期互信的合作关系</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-green-600">专业</h3>
                <p className="text-gray-600">专业的团队，专业的服务，为客户提供最优质的体验</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">创新</h3>
                <p className="text-gray-600">持续创新服务模式，引领行业发展趋势</p>
              </div>
            </div>
          </div>

          {/* 联系我们 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">联系我们</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6">
                <h3 className="font-semibold mb-2">客服热线</h3>
                <p className="text-blue-600 text-lg">400-0880-104</p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">商务合作</h3>
                <p className="text-gray-600">marketing@hfydmobi.com</p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">在线咨询</h3>
                <p className="text-gray-600">7x24小时在线服务</p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">微信服务</h3>
                <p className="text-gray-600">扫码添加客服微信</p>
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
