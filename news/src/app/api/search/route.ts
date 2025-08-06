import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const client = await clientPromise;
  const db = client.db();
  const news = await db.collection('news').find({ title: { $regex: q, $options: 'i' } }).toArray();
  return NextResponse.json(news);
}
