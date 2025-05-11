import { Bell, Search } from 'lucide-react'

export function Header() {
  return (
    <div className="w-full !py-[24px] !px-[28px] border-b border-[#e0e0e0]">
      <header className="flex items-center justify-end gap-4">
        <div className="flex items-center gap-[19px] text-zinc-500">
          <Bell size={16} />
          <Search size={16} />
        </div>
        <div className="flex items-center gap-[2px]">
          <div className="flex flex-col font-semibold text-[10px] text-slate-500">
            <span>Bruno O</span>
            <span>Online</span>
          </div>
          <img src="/avatar.svg" alt="avatar" className="w-[28px] h-[28px]" />
        </div>
      </header>
    </div>
  )
}
