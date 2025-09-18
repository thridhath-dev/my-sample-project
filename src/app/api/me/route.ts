// app/api/me/route.ts
import { NextResponse } from 'next/server';
import { getOrCreateUserFromClerk } from '../../../lib/clerkSync';

export async function GET() {
  const user = await getOrCreateUserFromClerk();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  return NextResponse.json({ user });
}
