import { notFound } from "next/navigation";
import Comments from "./comments";

export default function NewsDetail({ params }: { params: { id: string } }) {
  // 后续可对接 API 获取新闻详情
  const newsId = params.id;
  if (!newsId) return notFound();
  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">新闻详情 - {newsId}</h1>
      <article className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-2">新闻标题示例 {newsId}</h2>
        <p className="text-gray-600 mb-4">新闻内容详情，后续自动填充。</p>
        <div className="mt-6 text-blue-600 underline"><a href="/news">返回新闻列表</a></div>
        <Comments newsId={newsId} />
      </article>
    </main>
  );
}
