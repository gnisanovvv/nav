import type React from "react"
import { Menu, X } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

interface MobileMenuProps {
  tabs: Array<{
    id: string
    icon: React.ElementType
    label: string
  }>
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({ tabs, activeTab, setActiveTab, isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-500 hover:text-gray-600">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setIsOpen(false)
                }}
                className={`p-4 rounded-xl transition-colors ${
                  activeTab === tab.id ? "bg-amber-200" : "hover:bg-gray-100"
                }`}
              >
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? "text-black" : "text-gray-500"}`} />
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

