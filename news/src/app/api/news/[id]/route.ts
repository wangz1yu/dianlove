import { NextResponse } from 'next/server';

const newsList = [
  { id: '1', title: '新闻标题示例 1', summary: '新闻摘要内容，后续自动填充。', content: '新闻详情内容 1。' },
  { id: '2', title: '新闻标题示例 2', summary: '新闻摘要内容，后续自动填充。', content: '新闻详情内容 2。' }
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const news = newsList.find(n => n.id === id);
  if (!news) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(news);
}
