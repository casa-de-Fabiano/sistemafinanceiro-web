import { Calendar, Home, ScrollText, User, Wallet } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { DayMonth } from '../../components/day-month'

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-zinc-700 text-white font-semibold !py-[30px] text-sm border-r border-[#525252]">
        <div className="flex justify-center !mb-12">
          <img src="/apple.svg" alt="apple" className="w-8 h-8" />
        </div>
        <nav className="space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center h-[60px] !px-4 !py-2 gap-2 hover:bg-[#3F4647] ${
                isActive
                  ? 'bg-[#3F4647] text-white border-l-2 border-l-white leading-none'
                  : 'text-zinc-300'
              }`
            }
          >
            <Home size={24} />
            Home
          </NavLink>

          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              `flex items-center h-[60px] !px-4 !py-2 gap-2 hover:bg-[#3F4647] ${
                isActive
                  ? 'bg-[#3F4647] text-white border-l-2 border-l-white leading-none'
                  : 'text-zinc-300'
              }`
            }
          >
            <User size={24} />
            Despesas
          </NavLink>

          <NavLink
            to="/revenues"
            className={({ isActive }) =>
              `flex items-center h-[60px] !px-4 !py-2 gap-2 hover:bg-[#3F4647] ${
                isActive
                  ? 'bg-[#3F4647] text-white border-l-2 border-l-white leading-none'
                  : 'text-zinc-300'
              }`
            }
          >
            <Calendar size={24} />
            Receitas
          </NavLink>

          <NavLink
            to="/transfers"
            className={({ isActive }) =>
              `flex items-center h-[60px] !px-4 !py-2 gap-2 hover:bg-[#3F4647] ${
                isActive
                  ? 'bg-[#3F4647] text-white border-l-2 border-l-white leading-none'
                  : 'text-zinc-300'
              }`
            }
          >
            <Wallet size={24} />
            Transferências
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center h-[60px] !px-4 !py-2 gap-2 hover:bg-[#3F4647] ${
                isActive
                  ? 'bg-[#3F4647] text-white border-l-2 border-l-white leading-none'
                  : 'text-zinc-300'
              }`
            }
          >
            <ScrollText size={24} />
            Relatórios
          </NavLink>
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
