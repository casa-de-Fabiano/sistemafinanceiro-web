import type { FieldError } from 'react-hook-form'

interface FieldProps {
  label: string
  required?: boolean
  error?: unknown
  children: React.ReactNode
}

function isFieldError(error: unknown): error is FieldError {
  return typeof error === 'object' && error !== null && 'type' in error
}

export function Field({ label, required, children, error }: FieldProps) {
  return (
    <div className="flex space-y-1 border-b border-b-gray-300 pb-2">
      <label className="text-base w-[240px] !py-3 !px-4 font-medium text-[#2E3239]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {isFieldError(error) && (
        <span className="text-red-500 text-xs">
          {error.message ?? 'Campo obrigatório'}
        </span>
      )}
    </div>
  )
}
