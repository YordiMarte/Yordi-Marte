import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6">

            <Image
                src="/image/YordiX.svg"
                alt="Yordi Logo"
                width={43}
                height={42}
            />

            <div className="flex items-center gap-1 rounded-xl p-1 bg-[#171717]">

            <a 
                href="/home" 
                className="px-4 py-1.5 text-sm text-white bg-[#262626] rounded-lg font-medium"
            >
                Home
            </a>

            <a 
                href="/about" 
                className="px-4 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg transition"
            >
                About
            </a>

            <a 
                href="/blog" 
                className="px-4 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg transition"
            >
                Blog
            </a>

            <a 
                href="/gear" 
                className="px-4 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg transition"
            >
            Gear
        </a>

        </div>

        <button 
            aria-label="Toggle theme"
            className="hover:text-white transition"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        </button>

        </nav>
    )
}