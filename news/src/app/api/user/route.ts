import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('users').insertOne(body);
  return NextResponse.json({ insertedId: result.insertedId });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('users').findOne({ username });
  return NextResponse.json(user);
}
