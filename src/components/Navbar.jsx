"use client"; // This is a client component 👈🏽
import Link from 'next/link'
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
 
    return (
        <div >
            <ul className='flex'>
                <li style={{ backgroundColor: pathname === '/' && '#eee'}}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li style={{ backgroundColor: pathname === '/articles' && '#eee'}}>
                    <Link href="/articles">
                        Articles
                    </Link>
                </li>
                <li> 
                    <Link href="/papers">
                        Papers
                    </Link>
                </li>
                <li>
                    <Link href="/policy">
                        Policy
                    </Link>
                </li>
            </ul>
        </div>
    )
}
