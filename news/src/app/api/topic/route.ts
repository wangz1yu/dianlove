import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const topics = await db.collection('topics').find({}).toArray();
  return NextResponse.json(topics);
}
