import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const newsId = searchParams.get('newsId');
  const client = await clientPromise;
  const db = client.db();
  const comments = await db.collection('comments').find({ newsId }).toArray();
  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('comments').insertOne(body);
  return NextResponse.json({ insertedId: result.insertedId });
}
