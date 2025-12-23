export default function About() {
  return (
    <section className="relative px-6 py-16 bg-gradient-to-r  from-indigo-900 via-purple-800 to-blue-600 text-white overflow-hidden">
      {/* Animated glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl absolute top-20 left-20 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl absolute bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200">
          Hi, I’m <span className="font-semibold text-yellow-300">Anil Shrivastava</span>, 
          currently pursuing <span className="font-semibold">MCA at LNCT University</span>, 
          with a B.Sc (IT) background from Bundelkhand University.  
          I am a passionate <span className="font-semibold text-pink-300">Full-Stack MERN Developer</span> 
          with hands-on experience in building scalable and user-friendly applications.
        </p>

        {/* Work Experience */}
        <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md mb-8">
          <h3 className="text-2xl font-bold text-pink-400 mb-3">💼 Work Experience</h3>
          <p className="text-gray-200 text-left">
            <span className="font-semibold">Web Developer Intern</span> — Edunet Foundation (in collaboration with EY Global Services)  
            <br />
            <span className="text-sm text-gray-300">March 2025 – April 2025</span>
          </p>
          <ul className="list-disc list-inside text-left mt-2 text-gray-300">
            <li>Developed a full-stack recipe sharing app using the MERN stack.</li>
            <li>Implemented RESTful APIs, secure authentication (JWT), and responsive UI.</li>
            <li>Collaborated in an agile environment to deliver user-friendly solutions.</li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="grid sm:grid-cols-2 gap-6 text-left mb-10">
          <div className="bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">🛠 Technical Skills</h3>
            <p><span className="font-semibold">Languages:</span> JavaScript (ES6+), Python (basic)</p>
            <p><span className="font-semibold">Frontend:</span> React.js, HTML5, CSS3, Tailwind, Bootstrap</p>
            <p><span className="font-semibold">Backend:</span> Node.js, Express.js, Mongoose</p>
            <p><span className="font-semibold">Database:</span> MongoDB</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-md backdrop-blur-md">
            <h3 className="text-xl font-semibold text-green-300 mb-3">⚡ Tools & Concepts</h3>
            <p>Git, GitHub, Postman, Thunder Client</p>
            <p>Full-Stack Development, API Design</p>
            <p>JWT Authentication & Secure APIs</p>
            <p>Responsive UI & Modern Deployment (Vercel, Render)</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918887639816"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition shadow-lg"
          >
            📞 Contact
          </a>
          <a
            href="mailto:anilshrivastava9936@gmail.com"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition shadow-lg"
          >
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/in/anil-shrivastava-8700b2279"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition shadow-lg"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/Anilshrivastava9936"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition shadow-lg"
          >
            💻 GitHub
          </a>
          <a
            href="https://leetcode.com/u/anilshrivastava9936/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition shadow-lg"
          >
            🧩 LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}
