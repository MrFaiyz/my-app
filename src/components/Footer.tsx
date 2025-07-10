"use client"

import { motion } from "framer-motion"
import { 
  Sparkles, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Integrations", href: "#integrations" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Templates", href: "#templates" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: "#", color: "#1da1f2" },
    { icon: Instagram, href: "#", color: "#e4405f" },
    { icon: Youtube, href: "#", color: "#ff0000" },
    { icon: Linkedin, href: "#", color: "#0077b5" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3ac4ec] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ef4444] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-3xl border border-white/10 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3ac4ec] transition-colors min-w-[300px]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3ac4ec] to-[#ef4444] text-white font-semibold flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-[#3ac4ec]" />
                  <div className="absolute inset-0 w-8 h-8 bg-[#3ac4ec] rounded-full blur-lg opacity-30"></div>
                </div>
                <span className="text-2xl font-bold font-space-grotesk gradient-text">
                  zsideo
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Transform your raw footage into viral content with AI-powered editing. 
                Join thousands of creators who trust Zsideo for their content needs.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-[#3ac4ec]" />
                  <span className="text-sm">hello@zsideo.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-[#3ac4ec]" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#3ac4ec]" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold font-space-grotesk">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm font-jetbrains-mono">
            © 2025 Zsideo. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Made with ❤️ for creators</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              <span className="font-jetbrains-mono">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}