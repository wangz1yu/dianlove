// 数据迁移脚本：初始化管理员账号和部分内容
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dianlove-news';

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  // 初始化管理员账号
  const passwordHash = await bcrypt.hash('admin123', 10);
  await db.collection('admins').insertOne({ username: 'admin', passwordHash });

  // 初始化部分新闻
  await db.collection('news').insertMany([
    { id: '1', title: '新闻标题示例 1', summary: '新闻摘要内容，后续自动填充。' },
    { id: '2', title: '新闻标题示例 2', summary: '新闻摘要内容，后续自动填充。' }
  ]);

  console.log('数据迁移完成');
  await client.close();
}

main();
