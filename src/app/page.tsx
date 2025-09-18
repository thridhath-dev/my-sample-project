import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


export default function Home() {
return (
<main>
<h1>Next.js + Clerk (TypeScript) demo</h1>


<nav style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
<Link href="/sign-in">Sign in</Link>
<Link href="/sign-up">Sign up</Link>
<Link href="/profile">Profile (protected) by thridath</Link>
</nav>


<SignedIn>
<p>You are signed in. <UserButton /></p>
</SignedIn>


<SignedOut>
<p>You are signed out.</p>
</SignedOut>
</main>
);
}