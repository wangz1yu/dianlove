import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { adminAuth } from '@/middleware/adminAuth';
import { logAction } from '@/lib/logger';

export async function GET(request: Request) {
  const authResult = adminAuth(request as any);
  if (authResult) return authResult;
  const client = await clientPromise;
  const db = client.db();
  const comments = await db.collection('comments').find({}).toArray();
  return NextResponse.json(comments);
}

export async function DELETE(request: Request) {
  const authResult = adminAuth(request as any);
  if (authResult) return authResult;
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
  await db.collection('comments').deleteOne({ _id: objectId });
  await logAction('delete_comment', { commentId: id, admin: request.headers.get('x-admin-token') });
  return NextResponse.json({ success: true });
}
