import { useForm } from 'react-hook-form'
import { Field } from '../field'
import { Download } from 'lucide-react'

type FormData = {
  conta: string
  valor: number
  data: string
  observacoes?: string
  recibo: FileList
}

export function TransfersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white !py-2.5 !px-[15px] rounded-xl w-[915px] max-w-wd space-y-4 shadow border border-[#ECECEC]"
    >
      <Field label="Conta" required error={errors.conta}>
        <select
          {...register('conta', { required: true })}
          className="w-full bg-transparent outline-none text-gray-400"
        >
          <option value="">Selecione a conta</option>
          <option value="banco">Banco</option>
          <option value="carteira">Carteira</option>
        </select>
      </Field>

      <Field label="Valor" required error={errors.valor}>
        <input
          type="number"
          placeholder="Informe o valor da despesa"
          {...register('valor', { required: true, valueAsNumber: true })}
          className="w-full bg-transparent outline-none text-gray-400 placeholder:text-gray-400"
        />
      </Field>

      <Field label="Data" required error={errors.data}>
        <input
          type="date"
          defaultValue="2024-01-01"
          {...register('data', { required: true })}
          className="w-full bg-transparent outline-none text-gray-400"
        />
      </Field>

      <Field label="Observações">
        <textarea
          placeholder="Informe detalhes da despesa"
          {...register('observacoes')}
          className="w-full h-[60px] bg-transparent outline-none resize-none text-gray-400 !py-4 leading-tight placeholder:text-gray-400"
        />
      </Field>

      <Field label="Recibo" required error={errors.recibo}>
        <div className="relative w-full flex items-center">
          <input
            type="file"
            {...register('recibo', { required: true })}
            className="w-full text-gray-400"
          />
          <Download className="absolute right-0 w-4 h-4 text-gray-400" />
        </div>
      </Field>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-500 text-white w-[140px] h-[40px] rounded-lg !my-4 font-semibold text-sm"
        >
          Registrar
        </button>
      </div>
    </form>
  )
}
