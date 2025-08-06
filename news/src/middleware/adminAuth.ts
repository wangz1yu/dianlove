import { NextResponse } from 'next/server';

export function adminAuth(request: Request) {
  // 支持多角色：x-admin-token 为管理员，x-user-token 为普通用户
  const adminToken = request.headers.get('x-admin-token');
  const userToken = request.headers.get('x-user-token');
  if (adminToken && adminToken === process.env.ADMIN_TOKEN) {
    return null; // 管理员通过
  }
  if (userToken && userToken === process.env.USER_TOKEN) {
    return null; // 普通用户通过（可扩展权限）
  }
  return NextResponse.json({ success: false, error: '未授权' }, { status: 401 });
}
