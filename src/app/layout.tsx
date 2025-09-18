'use client';


import React, { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs';


interface Props {
children: ReactNode;
}


export default function RootLayout({ children }: Props) {
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;


return (
<html lang="en">
<head />
<body>
<ClerkProvider publishableKey={publishableKey}>
<div style={{ padding: 20, fontFamily: 'system-ui, sans-serif' }}>
{children}
</div>
</ClerkProvider>
</body>
</html>
);
}