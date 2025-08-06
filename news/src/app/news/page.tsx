export default function NewsList() {
  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">新闻列表</h1>
      <ul className="space-y-4">
        {/* 这里将自动渲染新闻列表，后续可对接 API */}
        <li className="p-4 bg-white rounded shadow hover:bg-blue-50 transition-colors duration-200">
          <a href="/news/1" className="text-xl font-semibold text-blue-600">新闻标题示例 1</a>
          <p className="text-gray-600 mt-2">新闻摘要内容，后续自动填充。</p>
        </li>
        <li className="p-4 bg-white rounded shadow hover:bg-blue-50 transition-colors duration-200">
          <a href="/news/2" className="text-xl font-semibold text-blue-600">新闻标题示例 2</a>
          <p className="text-gray-600 mt-2">新闻摘要内容，后续自动填充。</p>
        </li>
      </ul>
    </main>
  );
}
