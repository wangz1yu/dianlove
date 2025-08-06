export default function Category() {
  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">分类浏览</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 分类列表，后续可自动生成 */}
        <div className="bg-white rounded shadow p-6 hover:bg-blue-50 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-2">科技</h2>
          <p className="text-gray-600">最新科技资讯。</p>
        </div>
        <div className="bg-white rounded shadow p-6 hover:bg-blue-50 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-2">财经</h2>
          <p className="text-gray-600">财经热点新闻。</p>
        </div>
        <div className="bg-white rounded shadow p-6 hover:bg-blue-50 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-2">生活</h2>
          <p className="text-gray-600">生活服务资讯。</p>
        </div>
      </div>
    </main>
  );
}
