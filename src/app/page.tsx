import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Sidebar from './components/sidebar/page';


export default function Home() {
return (
<main>

<h1 >Wigoh</h1>

<nav className='thri'>
<Link href="/sign-in">Sign in</Link>
<Link href="/sign-up">Sign up</Link>
</nav>


<SignedIn>
<p>You are signed in. <UserButton /></p>
</SignedIn>

<Sidebar/>

<SignedOut>
<p>You are signed out.</p>
</SignedOut>
</main>
);
}