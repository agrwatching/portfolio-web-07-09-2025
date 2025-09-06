"use client";

import { useEffect, useRef, useState } from "react";
import { Home, User, Folder, Code, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [highlightStyle, setHighlightStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

  const links = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const activeLink = containerRef.current.querySelector(
      `a[href="#${activeSection}"]`
    ) as HTMLElement | null;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setHighlightStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0b0d1a]/50 backdrop-blur-md px-2 py-2 rounded-lg shadow-lg">
      <div ref={containerRef} className="relative flex items-center gap-2">
        {/* Highlight pill */}
        <div
          className="absolute h-9 rounded-lg bg-blue-600 transition-all duration-300 ease-in-out"
          style={highlightStyle}
        />

        {links.map(({ id, icon: Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`relative flex items-center gap-2 px-3 py-2 rounded-lg transition z-10 ${
              activeSection === id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
