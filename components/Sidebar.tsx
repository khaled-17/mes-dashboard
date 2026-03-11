import Link from 'next/link';

export default function Sidebar() {
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Users', path: '/users' },
        { name: 'Reports', path: '/reports' },
        { name: 'Settings', path: '/settings' },
        { name: 'planning', path: '/planning' },
    ];

    return (
        <aside className="w-64 h-screen bg-primary text-white flex flex-col p-4 shadow-lg sticky top-0">
            <div className="text-2xl font-bold mb-8 text-center border-b border-white/20 pb-4">
                Dashboard
            </div>
            <nav className="flex flex-col gap-2">
                {pages.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-4 border-t border-white/20 text-center text-sm font-light text-white/70">
                MES Dashboard © 2026
            </div>
        </aside>
    );
}
