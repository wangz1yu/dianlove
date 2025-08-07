import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
              <Image 
                src="https://ext.same-assets.com/1093432607/579712723.png" 
                alt="节薪云" 
                width={120} 
                height={40} 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-white">
              <Link href="#" className="hover:text-blue-300 transition-colors text-white">灵活用工</Link>
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

      {/* 主横幅区域 */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              专注于灵活用工场景下<br/>
              的共享经济平台
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              致力于全业务本地化的专业财税服务平台
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-gray-800">
            <div className="flex mb-6">
              <button className="px-6 py-2 rounded-l transition-colors bg-blue-600 text-white">
                节薪云共享平台
              </button>
              <button className="px-6 py-2 rounded-r transition-colors bg-gray-100 hover:bg-gray-200">
                员工计算器
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="您的姓名" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="联系电话" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-colors btn-animate"
              >
                立即体验
              </button>
              <p className="text-sm text-gray-600 text-center">在线体验</p>
              <p className="text-xs text-gray-500 text-center">2025年平台分析数量已达28万+</p>
              <button 
                type="button" 
                className="w-full bg-gray-600 text-white py-3 rounded font-semibold hover:bg-gray-700 transition-colors btn-animate"
              >
                微信体验
              </button>
              <button 
                type="button" 
                className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition-colors btn-animate"
              >
                注册体验
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 服务卡片区域 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg card-hover">
              <Image 
                src="https://ext.same-assets.com/1093432607/1630995153.png" 
                alt="灵活代发" 
                width={60} 
                height={60} 
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">灵活代发</h3>
              <p className="text-gray-600">委托工资代发，<br/>财务便捷安全规避</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg card-hover">
              <Image 
                src="https://ext.same-assets.com/1093432607/1332277548.png" 
                alt="个税代缴" 
                width={60} 
                height={60} 
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">个税代缴</h3>
              <p className="text-gray-600">个税代缴业务，<br/>为纳税减负的财政</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg card-hover">
              <Image 
                src="https://ext.same-assets.com/1093432607/3613666154.png" 
                alt="正规平台" 
                width={60} 
                height={60} 
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">正规平台</h3>
              <p className="text-gray-600">服务管理，指导委托人<br/>安全纳税或税法大众化</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg card-hover">
              <Image 
                src="https://ext.same-assets.com/1093432607/2602308490.png" 
                alt="合法合规" 
                width={60} 
                height={60} 
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">合法合规</h3>
              <p className="text-gray-600">规范委托事宜及开发票<br/>信息公正—全程申诉</p>
            </div>
          </div>
        </div>
      </section>

      {/* 平台服务介绍 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">可信赖、安全、稳定的平台服务</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">灵活用工</h3>
              <p className="text-gray-600">改变传统用工模式，数据聚合处人才，<br/>为企业服务减税</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">税务服务</h3>
              <p className="text-gray-600">专业税务套载优化地址，有关税降<br/>低总成本</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">员工知识库</h3>
              <p className="text-gray-600">获取常用信息<br/>专家客服信息</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">个人独资企业</h3>
              <p className="text-gray-600">转变税人脉税，问题<br/>金融保障依托</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">个体工商户</h3>
              <p className="text-gray-600">解释程序责务税权注册<br/>条项的人员</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">自然人代开</h3>
              <p className="text-gray-600">统筹管理，一票拒绝，<br/>保护个人税供过代开费</p>
            </div>
          </div>
        </div>
      </section>

      {/* 行业解决方案区域 */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">全面、专业的行业解决方案</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-3 gap-4">
                <button className="px-4 py-3 rounded text-sm transition-colors bg-blue-600 text-white">
                  网红直播行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  社交电商行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  生活服务行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  教育培训行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  配送服务行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  互联网技术行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  共享出行行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  其他行业
                </button>
                <button className="px-4 py-3 rounded text-sm transition-colors bg-gray-600 hover:bg-gray-500">
                  自然人行业
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">网红直播行业</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-300">
                  2016年网红直播开始运营网络化，虚实专家网红业务的发展，中国网红直播市场规模呈持续大，
                  2021年市场规模达到3200亿元，预计2024年网红直播市场规模将达到1257亿元。
                </p>
                <p className="text-gray-300">
                  作继续经济发展，网红经济、主播收入、直播销售、主播税收MCN机构发展等问题，
                  让市场人人创业财源，问题直播平台。
                </p>
                <p className="text-gray-300">
                  MCN机构和网络主播是用户对网络直播的喜欢与可视网的直接连接点。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-700 px-3 py-1 rounded text-sm">主播免税</span>
                <span className="bg-gray-700 px-3 py-1 rounded text-sm">平台绑定个税</span>
                <span className="bg-gray-700 px-3 py-1 rounded text-sm">合理网站规范</span>
                <span className="bg-gray-700 px-3 py-1 rounded text-sm">文创计算模范</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 汇聚税筹热点资讯 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">汇聚税筹热点资讯</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-600">行业案例</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <p className="text-gray-600 text-sm">2023-01-10</p>
                  <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                    国家税务总局就税务登记管理办法公开征求意见
                  </h4>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 text-sm">2022-05-11</p>
                  <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                    海南灵活用工平台火热释
                  </h4>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 text-sm">2022-04-26</p>
                  <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                    美团于今年第三届电商灵活用工制度
                  </h4>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 text-sm">2022-09-01</p>
                  <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                    中国电信白皮书及灵活用工平台，含浙江
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="px-3 py-2 text-sm transition-colors text-blue-600 border-b-2 border-blue-600">
                  每日头条
                </button>
                <button className="px-3 py-2 text-sm transition-colors text-gray-600 hover:text-blue-600">
                  政策解读
                </button>
                <button className="px-3 py-2 text-sm transition-colors text-gray-600 hover:text-blue-600">
                  行业资讯
                </button>
                <button className="px-3 py-2 text-sm transition-colors text-gray-600 hover:text-blue-600">
                  专家观点
                </button>
                <button className="px-3 py-2 text-sm transition-colors text-gray-600 hover:text-blue-600">
                  劳务百科
                </button>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                    24人欠缴社保，灵活用工平台才是王道？
                  </h4>
                  <p className="text-gray-600 text-sm">2025-01-06</p>
                </div>
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                    承包费遵，灵活用工委托将提2040年中国均价
                  </h4>
                  <p className="text-gray-600 text-sm">2025-01-05</p>
                </div>
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                    自营免分改（四众团队节奏运营资源解决？
                  </h4>
                  <p className="text-gray-600 text-sm">2025-01-04</p>
                </div>
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                    2025年大津客服提现代管企业灵活管理
                  </h4>
                  <p className="text-gray-600 text-sm">2025-01-03</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-600">员工知识库</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">常见问题</h4>
                <div className="space-y-3">
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 一文理解灵活用工详细制
                  </p>
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 灵活用工招聘模式详点索
                  </p>
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 灵活用工法纳税检制规条
                  </p>
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 灵活用工综合处理方案
                  </p>
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 灵活用工新创电子支
                  </p>
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 灵活用工招平面检法发
                  </p>
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    → 灵活用工担管理业要
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务与支持 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">服务与支持</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">员工计算器</h3>
              <p className="text-gray-600 mb-6">立即使用</p>
              <h3 className="text-xl font-semibold mb-6">下载中心</h3>
              <p className="text-gray-600">查看更多</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">节薪云员工管理SAAS平台</h3>
              <p className="text-gray-600 mb-6">
                Saas系统操作、多选题护理、打造灵活用工一站式解决方案，
                让员工企业智商管理便营销高效的人资服务机构
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 btn-animate">
                  立即体验
                </button>
                <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 btn-animate">
                  平台介绍
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 遍布全国的合作伙伴 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">遍布全国的合作伙伴</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">40000家+</div>
              <p className="text-gray-600">企业及项目结算金合作</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1500万人次+</div>
              <p className="text-gray-600">累计用工总费结算服务</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300亿+</div>
              <p className="text-gray-600">累计总结算金额</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99%+</div>
              <p className="text-gray-600">一站客户出货一致好评</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors btn-animate">
              开启合作
            </button>
          </div>
        </div>
      </section>

      {/* 平台保障 */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">权威平台</h3>
              <p className="text-sm text-gray-300">正常平台合作安全保障体</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">安全保障</h3>
              <p className="text-sm text-gray-300">报税制度构建，联接使台保证</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">业务稳定</h3>
              <p className="text-sm text-gray-300">权限技术中心运营，合法合理</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">7x24小时服务</h3>
              <p className="text-sm text-gray-300">专业队伍问题咨询上第1限度</p>
            </div>
          </div>
        </div>
      </section>

      {/* 右侧悬浮客服栏 */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-600 text-white p-3 text-center">
            <p className="text-sm font-semibold">在线咨询</p>
          </div>
          <div className="p-2 space-y-2">
            <div className="bg-green-600 text-white p-2 rounded text-center cursor-pointer hover:bg-green-700 transition-colors">
              <p className="text-xs font-semibold">微信咨询</p>
            </div>
            <div className="bg-orange-600 text-white p-2 rounded text-center cursor-pointer hover:bg-orange-700 transition-colors">
              <p className="text-xs font-semibold">400-0880-104</p>
            </div>
            <div className="bg-purple-600 text-white p-2 rounded text-center cursor-pointer hover:bg-purple-700 transition-colors">
              <p className="text-xs font-semibold">注册体验</p>
            </div>
          </div>
        </div>
      </div>

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
