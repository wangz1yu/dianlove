import { NextResponse } from 'next/server';

// 示例新闻数据，后续可接数据库
const newsList = [
  { id: '1', title: '新闻标题示例 1', summary: '新闻摘要内容，后续自动填充。' },
  { id: '2', title: '新闻标题示例 2', summary: '新闻摘要内容，后续自动填充。' }
];

export async function GET() {
  return NextResponse.json(newsList);
}
