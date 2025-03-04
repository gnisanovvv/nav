"use client"

import { useState } from "react"
import { PenTool, Calculator, FileTextIcon, Search, Home } from "lucide-react"
import CoursesTab from "./components/CoursesTab"
import MathTab from "./components/MathTab"
import WritingTab from "./components/WritingTab"
import TextTab from "./components/TextTab"
import MobileMenu from "./components/MobileMenu"

const tabs = [
  { id: "home", icon: Home, component: CoursesTab, label: "Инструменты" },
  {
    id: "math",
    icon: Calculator,
    component: MathTab,
    label: "Математика",
    url: "https://fascinating-puffpuff-3402ff.netlify.app",
  },
  {
    id: "writing",
    icon: PenTool,
    component: WritingTab,
    label: "Письмо",
    url: "https://www.grammarly.com/",
  },
  {
    id: "text",
    icon: FileTextIcon,
    component: TextTab,
    label: "Текст",
    url: "https://www.google.com/docs/about/",
  },
]

export default function LearnifyDashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const ActiveTabComponent = tabs.find((tab) => tab.id === activeTab)?.component || CoursesTab
  const activeTabUrl = tabs.find((tab) => tab.id === activeTab)?.url

  return (
    <div className="flex h-screen bg-zinc-900">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex w-[120px] flex-col items-center py-6 space-y-8">
        <nav className="flex flex-col items-center space-y-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-xl transition-colors ${
                activeTab === tab.id ? "bg-amber-200" : "hover:bg-zinc-800"
              }`}
              title={tab.label}
            >
              <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? "text-black" : "text-white"}`} />
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white lg:rounded-l-3xl p-4 lg:p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-lg font-medium">
              <span className="text-[#33BB87] font-bold">Учи.Ответы</span>
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Поиск"
                className="pl-4 pr-10 py-2 rounded-full border border-gray-300 w-[300px]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-[#33BB87]" />
              </div>
            </div>

            <div className="hidden sm:flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="ml-2">
                <p className="font-medium">Kacie Velasquez</p>
                <p className="text-sm text-gray-500">@usertest</p>
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="flex-1 overflow-auto">
          <ActiveTabComponent url={activeTabUrl} />
        </div>
      </div>
    </div>
  )
}

