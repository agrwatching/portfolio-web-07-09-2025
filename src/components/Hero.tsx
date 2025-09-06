export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#12162c] text-white overflow-hidden px-4"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-60 left-10 sm:top-30 sm:left-30 md:top-20 md:left-20 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-blue-500 blur-[25px] sm:blur-[30px] md:blur-[35px] rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-60 right-10 sm:bottom-30 sm:right-30 md:bottom-20 md:right-20 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-purple-500 blur-[25px] sm:blur-[30px] md:blur-[35px] rounded-full animate-pulse-glow"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:mt-20 mt-0">
        WEBSITE{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          PORTFOLIO
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-base sm:text-lg md:text-2xl text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-medium">Agra</span>. All rights reserved.
      </p>

      {/* Tagline */}
      <p className="mt-4 max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg text-gray-400">
       This website is built with Next.js v15.5.2 and Tailwind CSS v4.1.13. Featuring a gradient theme and a minimalist design style, it delivers a modern, lightweight, and elegant user experience.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="#projects"
          className="px-6 sm:px-7 py-2 rounded-lg font-bold transition shadow bg-blue-400 hover:bg-blue-500 text-[#12162c] hover:scale-105 text-sm sm:text-base"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 sm:px-7 py-2 rounded-lg font-bold transition shadow border border-blue-600 text-blue-500 bg-black hover:bg-[#12162c] hover:text-white hover:scale-105 text-sm sm:text-base"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
