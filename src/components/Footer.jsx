import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">D</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-white">Devople</span>
            </div>
            <p className="text-slate-400 text-sm md:text-base mb-3 md:mb-4">
              A creative tech studio building apps, websites, and future-ready products.
            </p>
            <div className="flex space-x-4">
              <a href="[LINKEDIN_URL]" className="hover:text-orange-400 transition-colors">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="[INSTAGRAM_URL]" className="hover:text-orange-400 transition-colors">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="[GITHUB_URL]" className="hover:text-white transition-colors">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="mailto:[YOUR_EMAIL]" className="hover:text-orange-400 transition-colors">
                <Mail size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm md:text-base mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-we-work" className="hover:text-white transition-colors">How We Work</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-sm md:text-base mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <a href="mailto:[YOUR_EMAIL]" className="hover:text-white transition-colors">
                  [YOUR_EMAIL]
                </a>
              </li>
              <li>
                <a href="[WHATSAPP_LINK]" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="text-slate-400">[LOCATION]</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs md:text-sm">
            © {currentYear} [YOUR STARTUP NAME]. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-3 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
