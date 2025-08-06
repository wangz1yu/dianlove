import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const users = await db.collection('users').find({}).toArray();
  return NextResponse.json(users);
}

export async function DELETE({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ success: false, error: '缺少id' }, { status: 400 });
  let objectId: ObjectId;
  try {
    objectId = new ObjectId(id);
  } catch {
    return NextResponse.json({ success: false, error: 'id格式错误' }, { status: 400 });
  }
  const client = await clientPromise;
  const db = client.db();
  await db.collection('users').deleteOne({ _id: objectId });
  return NextResponse.json({ success: true });
}
