import { Routes, Route } from 'react-router-dom'
import { Layout } from './pages/layout/layout'
import { Dashboard } from './pages/dashboard/dashboard'
import { Expenses } from './pages/dashboard/expenses'
import { Revenues } from './pages/dashboard/revenues'
import { Transfers } from './pages/dashboard/transfers'
import { Reports } from './pages/dashboard/reports'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="revenues" element={<Revenues />} />
        <Route path="transfers" element={<Transfers />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}
