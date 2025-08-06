import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('news').insertOne(body);
  return NextResponse.json({ insertedId: result.insertedId });
}
