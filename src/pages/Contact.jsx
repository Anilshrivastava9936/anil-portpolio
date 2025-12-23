import { useState } from "react";
import { motion } from 'framer-motion';


export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "efda72e5-a691-4b46-aceb-e407c4e30216");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
        <section

      id="contact"
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-r md:from-black md:via-pink-500 md:to-blue-500 text-white p-6 md:bg-gradient-to-r from-blue-900 via-purple-700 to-pink-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-lg border border-white/30 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Send Me a Message
        </h2>

        <form className="space-y-4" onSubmit={onSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
               name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
               name="message"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
         <span>{result ? result : ""}</span>
      </motion.div>
    </section>
  );
}


