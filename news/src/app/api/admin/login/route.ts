import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const client = await clientPromise;
  const db = client.db();
  const admin = await db.collection('admins').findOne({ username });
  if (!admin) return NextResponse.json({ success: false });
  const valid = await bcrypt.compare(password, admin.passwordHash);
  return NextResponse.json({ success: valid });
}
