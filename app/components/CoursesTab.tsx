"use client"

import { useState } from "react"
import { ArrowUpRight, Star, Users } from "lucide-react"

const categories = [
  { id: "all", name: "Все инструменты" },
  { id: "general", name: "Общее" },
  { id: "report-writing", name: "Доклады" },
  { id: "pdf-helper", name: "PDF-помощник" },
  { id: "theorem", name: "Теоремы" },
]

const courses = [
  {
    id: 1,
    title: "ИИ-репетитор по предмету",
    subtitle: "Объяснит любую тему и задание, понимает фото и текст",
    category: "general",
    rating: 4.9,
    students: "14к+",
    icon: "🧠",
    categoryLabel: "Общее",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Напиши доклад вместе с ИИ",
    subtitle: "По шагам напишем работу любой сложности",
    category: "report-writing",
    rating: 4.8,
    students: "9к+",
    icon: "📝",
    categoryLabel: "Доклады",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "PDF-помощник",
    subtitle: "Реши любые примеры из раздаток",
    category: "pdf-helper",
    icon: "📄",
    categoryLabel: "PDF-помощник",
    bgColor: "bg-purple-100",
    tag: "Скоро",
  },
  {
    id: 4,
    title: "Закрепи теоремы с ИИ",
    subtitle: "ИИ сгенерирует видео-объяснение и задания",
    category: "theorem",
    rating: 4.7,
    students: "5к+",
    icon: "🎥",
    categoryLabel: "Теоремы",
    bgColor: "bg-yellow-100",
  },
  {
    id: 5,
    title: "Подготовься к экзамену",
    subtitle: "Персональный план подготовки и тренировочные тесты",
    category: "general",
    rating: 4.9,
    students: "12к+",
    icon: "📚",
    categoryLabel: "Общее",
    bgColor: "bg-orange-100",
  },
]

export default function CoursesTab() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCourses =
    activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory)

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-6">Инструменты для Учебы</h2>

      {/* Category filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-2 rounded-full border transition-colors duration-300 ${
              activeCategory === category.id
                ? "bg-[#33BB87] text-white border-[#33BB87]"
                : "bg-white text-black border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Course cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className={`${course.bgColor} rounded-3xl p-6 relative group cursor-pointer 
                        transition-all duration-300 ease-in-out min-h-[250px]
                        transform hover:-translate-y-1`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                  {course.icon}
                </div>
                <span className="text-sm font-medium text-gray-600">{course.categoryLabel}</span>
              </div>
              {course.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-black">{course.rating}</span>
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-2 text-black">{course.title}</h3>
            <p className="text-gray-600 mb-16">{course.subtitle}</p>

            {course.students && (
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">{course.students}</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white" />
                </div>
              </div>
            )}

            {course.tag && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                {course.tag}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

