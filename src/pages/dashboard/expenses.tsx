import { ExpensesForm } from '../../components/forms/expensesForm'

export function Expenses() {
  return (
    <div className="!ml-[59px]">
      <h1 className="text-2xl font-bold text-[#5D636B] !pb-[30px]">
        Controle de Despesas
      </h1>
      <ExpensesForm />
    </div>
  )
}
