export default function Topic() {
  // 后续可通过 API 获取专题数据
  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">专题/热门活动</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded shadow p-6 hover:bg-blue-50 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-2">专题一</h2>
          <p className="text-gray-600">专题内容简介，后续自动填充。</p>
        </div>
        <div className="bg-white rounded shadow p-6 hover:bg-blue-50 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-2">专题二</h2>
          <p className="text-gray-600">专题内容简介，后续自动填充。</p>
        </div>
      </div>
    </main>
  );
}
