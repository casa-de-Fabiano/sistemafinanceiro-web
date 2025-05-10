import { Link, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav className="space-y-4">
          <Link to="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link to="/expenses" className="block hover:text-gray-300">
            Despesas
          </Link>
          <Link to="/revenues" className="block hover:text-gray-300">
            Receitas
          </Link>
          <Link to="/transfers" className="block hover:text-gray-300">
            Transferências
          </Link>
          <Link to="/reports" className="block hover:text-gray-300">
            Relatórios
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  )
}
