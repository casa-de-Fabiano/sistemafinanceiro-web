import { Calendar, Home, ScrollText, User, Wallet } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { DayMonth } from '../../components/day-month'
export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-zinc-700 text-white font-semibold !py-[30px] text-sm border-r border-[#525252]">
        <div className="flex justify-center">
          <img src="/apple.svg" alt="apple" className="w-8 h-8 !mb-12" />
        </div>
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center hover:bg-[#3F4647] h-[60px] !px-4 !py-2 gap-[10px]"
          >
            <Home size={24} />
            Home
          </Link>
          <Link
            to="/expenses"
            className="flex items-center hover:bg-[#3F4647] h-[60px] !px-4 !py-2 gap-[10px]"
          >
            <User size={24} />
            Despesas
          </Link>
          <Link
            to="/revenues"
            className="flex items-center hover:bg-[#3F4647] h-[60px] !px-4 !py-2 gap-[10px]"
          >
            <Calendar size={24} />
            Receitas
          </Link>
          <Link
            to="/transfers"
            className="flex items-center hover:bg-[#3F4647] h-[60px] !px-4 !py-2 gap-[10px]"
          >
            <Wallet size={24} />
            Transferências
          </Link>
          <Link
            to="/reports"
            className="flex items-center hover:bg-[#3F4647] h-[60px] !px-4 !py-2 gap-[10px]"
          >
            <ScrollText size={24} />
            Relatórios
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-8">
        <Header />
        <DayMonth />
        <Outlet />
      </main>
    </div>
  )
}
