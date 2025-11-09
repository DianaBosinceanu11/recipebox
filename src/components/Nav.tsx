'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname()
    const link = (to: string, label: string) => (
        <Link
        href={to}
        className={`px-3 py-1 rounded text-sm
            ${pathname === to ? 'bg-black text-white' : 'bg-gray-200 tex-green hover:bg-gray-300'}`}
        >
            {label}

        </Link>
    )

    return (
        <nav className="flex items-center justify-between py-4 border-b">
            <div className="text-2xl font-bold text-red-500">RecipeBox</div>
            <div className="flex gap-2">
                {link('/', 'List')}
                {link('/new', 'New')}
            </div>
        </nav>
    )
}


