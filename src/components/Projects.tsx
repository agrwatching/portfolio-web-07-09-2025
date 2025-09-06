"use client";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal website built with Next.js and Tailwind CSS.",
      link: "#",
    },
    {
      title: "E-Absensi App",
      desc: "Attendance web app with PHP Native, SQLite, and Tailwind.",
      link: "#",
    },
    {
      title: "Timer Desktop App",
      desc: "Productivity timer built with Electron.",
      link: "#",
    },
    {
      title: "Blog Platform",
      desc: "Fullstack blog app with Next.js and MongoDB.",
      link: "#",
    },
    { title: "Chat App", desc: "Realtime chat app with WebSocket.", link: "#" },
    {
      title: "Landing Page",
      desc: "Marketing landing page with TailwindCSS.",
      link: "#",
    },
    { title: "Mobile App", desc: "React Native mobile app.", link: "#" },
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / cardsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pageStart, setPageStart] = useState(0); // untuk range nomor

  const maxVisibleNumbers = 5;

  const goPrevNumbers = () => {
    if (pageStart > 0) setPageStart(pageStart - 1);
  };

  const goNextNumbers = () => {
    if (pageStart + maxVisibleNumbers < totalSlides)
      setPageStart(pageStart + 1);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0d1a] text-white px-6 py-20"
    >
      {/* Judul */}
      <h2 className="text-3xl font-bold text-center mb-6">
        My <span className="text-blue-500">Projects</span>
      </h2>

      {/* Garis kecil */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>

      {/* Cards Wrapper */}
      <div className="max-w-6xl w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 min-h-[588px] max-h-[600px] md:min-h-[200px] md:max-h-[200px]">
          {projects
            .slice(
              currentSlide * cardsPerSlide,
              currentSlide * cardsPerSlide + cardsPerSlide
            )
            .map((project, i) => (
              <div
                key={i}
                className="bg-[#0b0d1a] p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition min-h-[180px] max-h-[180px] flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-1 overflow-hidden text-ellipsis">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
                >
                  View Project →
                </a>
              </div>
            ))}
        </div>
      </div>

      {/* Number Pagination */}
      <div className="flex items-center gap-2 mt-6">
        {/* tombol panah kiri */}
        {pageStart > 0 && (
          <button
            onClick={goPrevNumbers}
            className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
          >
            ◀
          </button>
        )}

        {/* nomor */}
        {Array.from({
          length: Math.min(maxVisibleNumbers, totalSlides - pageStart),
        }).map((_, i) => {
          const pageNumber = pageStart + i;
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
          );
        })}

        {/* tombol panah kanan */}
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
  );
}
