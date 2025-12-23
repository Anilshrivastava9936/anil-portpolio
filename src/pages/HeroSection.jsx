import { Navigate } from "react-router-dom";
import { motion } from 'framer-motion';
import TypingText from "../components/TypingText";
import anil from '../assets/anil.png'

export default function Hero() {

  return (
    <section className="grid md:grid-cols-2 gap-6 items-center px-6 py-12 bg-gradient-to-r md:from-black md:via-pink-500 md:to-blue-500 text-white p-6 md:bg-gradient-to-r from-blue-900 via-purple-700 to-pink-500">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold p-1 mt-10">
          Hi, I'm Anil Shrivastava  👋
        </motion.h1>
        {/* <p className="mt-4 text-lg md:text-xl text-gray-600">
          Full Stack Developer | MERN | Freelancer
        </p> */}
        <TypingText />
        <motion.button
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"  >
          <a href="/projects">View My Work</a>

        </motion.button>
      </div>

      <div className="flex justify-center ">
        <img
          src={anil}
          alt="Profile"
          className="rounded-full w-48 md:w-72 mt-20"
        />
      </div>

      <div className="text-6xl">🟢 🍃🧱🎨🔌⚡🛠️⚛️
</div>
    </section>
  );
}
