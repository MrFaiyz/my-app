"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold text-[#3ac4ec] cursor-pointer"
        >
          zsideo
        </motion.div>

        {/* Links */}
        <div className="flex items-center gap-8 text-base">
          {["about", "testimonials", "services"].map(link => (
            <motion.div
              key={link}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <Link 
                href={`#${link}`} 
                className="text-slate-800 hover:text-[#3ac4ec] transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="#contact">
              <button className="ml-4 px-5 py-2 rounded-full bg-[#3ac4ec] text-white font-semibold hover:bg-[#ef4444] transition-colors">
                Contact
              </button>
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}
