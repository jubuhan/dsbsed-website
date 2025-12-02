import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">[LOGO]</span>
              </div>
              <span className="font-bold text-xl text-white">[YOUR STARTUP NAME]</span>
            </div>
            <p className="text-slate-400 mb-4">
              A creative tech studio building apps, websites, and future-ready products.
            </p>
            <div className="flex space-x-4">
              <a href="[LINKEDIN_URL]" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="[INSTAGRAM_URL]" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="[GITHUB_URL]" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:[YOUR_EMAIL]" className="hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
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
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} [YOUR STARTUP NAME]. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
