import Link from "next/link";
import { HomeIcon, ChartBarIcon, CurrencyDollarIcon, TagIcon, BellAlertIcon } from "@heroicons/react/24/outline"; 

// install heroicons: npm install @heroicons/react

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white shadow-md min-h-screen flex flex-col">
      {/* Title */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">Finance Tracker</h2>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
              <HomeIcon className="h-5 w-5 text-gray-500" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
              <ChartBarIcon className="h-5 w-5 text-gray-500" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/transactions" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
              <CurrencyDollarIcon className="h-5 w-5 text-gray-500" />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link href="/categories" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
              <TagIcon className="h-5 w-5 text-gray-500" />
              <span>Categories</span>
            </Link>
          </li>
          <li>
            <Link href="/alerts" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
              <BellAlertIcon className="h-5 w-5 text-gray-500" />
              <span>Alerts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
