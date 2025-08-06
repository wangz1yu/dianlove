import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="w-full shadow-md bg-white sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-blue-600">海风阅读</div>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/news">新闻</Link></li>
            <li><Link href="/category">分类</Link></li>
            <li><Link href="/about">关于我们</Link></li>
          </ul>
        </nav>
      </header>
      <section className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">欢迎来到海风阅读</h1>
        <p className="text-lg mb-8">这里是新闻、资讯、阅读的聚合平台，内容与 https://www.hfydmobi.com/ 保持一致。</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">最新新闻</h2>
            <p>实时更新，权威资讯。</p>
            <Link href="/news" className="text-blue-600 underline">查看新闻</Link>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">分类浏览</h2>
            <p>多种分类，精准推荐。</p>
            <Link href="/category" className="text-blue-600 underline">浏览分类</Link>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">关于我们</h2>
            <p>了解平台与团队。</p>
            <Link href="/about" className="text-blue-600 underline">了解更多</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
