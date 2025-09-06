export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0d1a] text-white px-6 md:pt-12"
    >
      {/* Judul */}
      <h2 className="text-3xl font-bold text-center mb-4">
        About <span className="text-blue-500">Me</span>
      </h2>

      {/* Garis kecil */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-5"></div>

      {/* Konten profil */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl bg-black p-4 rounded-lg shadow-lg border border-blue-800">
        {/* Foto profil */}
        <div className="md:w-60 w-32 aspect-square rounded-full overflow-hidden shadow-lg border-2 border-blue-500">
          <img
            src="Gdg cloud.png"
            alt="Agra Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-center md:text-left text-gray-400 space-y-4 min-h-[180px] max-h-[180px]">
          <p>
            Hi, I&apos;m <span className="text-blue-400 font-medium">Agra</span>, a
            passionate developer who loves crafting modern and responsive web
            applications. My focus is on building clean, fast, and visually
            appealing digital experiences.
          </p>
          <p>
            With a solid foundation in{" "}
            <span className="text-purple-400 font-medium">JavaScript</span>,{" "}
            <span className="text-purple-400 font-medium">TailwindCSS</span>, and{" "}
            <span className="text-purple-400 font-medium">Next.js</span>, I build projects that are both functional and engaging.
          </p>
        </div>
      </div>
      <div className="max-w-5xl w-full mx-auto mt-5">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1: Experience + Coding */}
          <div className="cursor-pointer flex-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-md pt-1 flex flex-col items-center justify-start h-32 min-h-[120px] max-h-30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)]">
            {/* Judul */}
            <p className="text-blue-400 text-lg font-semibold text-center">
              Experience
            </p>

            {/* Konten bawah */}
            <div className="flex items-center justify-around w-full">
              {/* Experience */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-blue-500">3+</p>
                  <img
                    src="team.png"
                    alt=""
                    className="w-10 aspect-square rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-gray-400 text-lg mt-1">Years Working</p>
              </div>

              {/* Coding */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-green-500">20+</p>
                  <img
                    src="verify.png"
                    alt=""
                    className="w-10 aspect-square rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-gray-400 text-lg mt-1">Projects Done</p>
              </div>
            </div>
          </div>
          {/* Card 2: Focus Area */}
          <div className="cursor-pointer flex-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-md pt-1 p-2 flex flex-wrap justify-center gap-2 h-32 min-h-[120px] max-h-30 overflow-auto hover:scale-[1.02] transition-transform hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)]">
            <p className="text-blue-400 text-lg font-semibold w-full text-center">
              Focus Areas
            </p>
            <ul className="flex flex-wrap justify-center gap-4 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Fullstack Solution
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Machine Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
