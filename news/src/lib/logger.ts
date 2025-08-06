import clientPromise from '@/lib/mongodb';

export async function logAction(action: string, detail: any) {
  const client = await clientPromise;
  const db = client.db();
  await db.collection('logs').insertOne({
    action,
    detail,
    timestamp: new Date()
  });
}
