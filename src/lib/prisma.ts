// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `prisma` in development to avoid exhausting connections with HMR
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;
