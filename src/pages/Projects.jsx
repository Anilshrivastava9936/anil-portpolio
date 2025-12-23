import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import generativeAi from '../assets/generativeai.png'
import hinex from '../assets/hinex.png'
import realestate from '../assets/realestate.png'

export default function Projects() {
  const projectList = [
    { title: "Generative ai", img: generativeAi, link: "https://generative-ai-image-a2pr.onrender.com/" },
    { title: "Hinex ecommerce", img: hinex, link: "https://hinex-wordl.vercel.app/" },
    { title: "Real Estate", img: realestate, link: "https://real-estate-xe2k.onrender.com/" },
  ];

  return (
    <section 
    
    className="px-6 py-12 bg-gradient-to-r md:from-black md:via-pink-500 md:to-blue-500 text-white p-6 md:bg-gradient-to-r from-blue-900 via-purple-700 to-pink-500">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <motion.div 
       initial={{ opacity: 0, y: 150 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((p, i) => (
          <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={p.img} alt={p.title} className="w-[80vh]  object-cover  mt-5" />
            <div className="p-4 flex justify-evenly  items-center">
              <h3 className="text-xl md:text-3xl font-semibold text-gray-500">{p.title}</h3>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 px-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                🔗 Click here for Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
