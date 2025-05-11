import { ChevronDown } from 'lucide-react'

export function DayMonth() {
  return (
    <div className="text-[#2E3239] text-2xl !ml-[59px] !mt-[77px]">
      <h1 className="font-bold !pb-[20px]">Referência</h1>

      <div className="w-[331px] h-[72px] !mb-[50px] mt-2 flex items-center justify-between !px-4 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <label className="text-base font-medium text-[#2E3239]">
          Mês/Ano <span className="text-red-500">*</span>
        </label>
        <div className="relative w-1/2">
          <select
            defaultValue=""
            className="w-full bg-transparent text-gray-400 text-base appearance-none !pr-6 outline-none text-center [&>option]:text-center"
          >
            <option value="" disabled hidden>
              Selecione
            </option>
            {/* Add more options here */}
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
