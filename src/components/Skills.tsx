"use client"
import { useState } from "react"

export default function Skills() {
  const skills = [
    "HTML","CSS","JavaScript","TypeScript","React","Next.js",
    "Tailwind CSS","Node.js","PHP","SQLite","MongoDB","Git/GitHub", "Figma", "Electron","WebSocket","Machine Learning", "Python","Django","Flask","C++","Java","Kotlin","Swift","Dart","Flutter"
  ]

  const skillsPerSlide = 16
  const totalSlides = Math.ceil(skills.length / skillsPerSlide)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pageStart, setPageStart] = useState(0)

  const maxVisibleNumbers = 5

  const goPrevNumbers = () => {
    if (pageStart > 0) setPageStart(pageStart - 1)
  }

  const goNextNumbers = () => {
    if (pageStart + maxVisibleNumbers < totalSlides)
      setPageStart(pageStart + 1)
  }

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0d1a] text-white px-6 md:pt-10"
    >
      {/* Judul */}
      <h2 className="text-3xl font-bold text-center mb-6">
        My <span className="text-blue-500">Skills</span>
      </h2>

      {/* Garis kecil */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>

      {/* Grid Skills */}
      <div className="max-w-4xl w-full min-h-[500px] max-h-[500px] md:min-h-[260px] md:max-h-[260px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-500">
          {skills
            .slice(
              currentSlide * skillsPerSlide,
              currentSlide * skillsPerSlide + skillsPerSlide
            )
            .map((skill, i) => (
              <div
                key={i}
                className="cursor-pointer bg-[#12162c] px-4 py-3 rounded-xl shadow border border-gray-800 hover:border-blue-500 transition text-center"
              >
                {skill}
              </div>
            ))}
        </div>
      </div>

      {/* Number Pagination */}
      <div className="flex items-center gap-2 mt-6">
        {pageStart > 0 && (
          <button
            onClick={goPrevNumbers}
            className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
          >
            ◀
          </button>
        )}

        {Array.from({
          length: Math.min(maxVisibleNumbers, totalSlides - pageStart),
        }).map((_, i) => {
          const pageNumber = pageStart + i
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentSlide(pageNumber)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentSlide === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {pageNumber + 1}
            </button>
          )
        })}

        {pageStart + maxVisibleNumbers < totalSlides && (
          <button
            onClick={goNextNumbers}
            className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
          >
            ▶
          </button>
        )}
      </div>
    </section>
  )
}
