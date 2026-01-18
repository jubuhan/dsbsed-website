import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 text-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 mb-3 md:mb-4 justify-center md:justify-start">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#FF6B35] to-[#FB923C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">D</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-black">Devople</span>
            </div>
            <p className="text-black/60 text-sm md:text-base mb-3 md:mb-4 max-w-md">
              A creative tech studio building apps, websites, and future-ready products.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="[LINKEDIN_URL]" className="hover:text-[#FF6B35] transition-colors">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="[INSTAGRAM_URL]" className="hover:text-[#FF6B35] transition-colors">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="[GITHUB_URL]" className="hover:text-black transition-colors">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="mailto:[YOUR_EMAIL]" className="hover:text-[#FF6B35] transition-colors">
                <Mail size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-black text-base md:text-lg mb-3">Ready to start your project?</h3>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FB923C] text-white font-semibold rounded-lg hover:from-[#FF8C42] hover:to-[#FF6B35] transition-all duration-300 shadow-lg hover:shadow-[#FF6B35]/50"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FF6B35]/20 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/50 text-xs md:text-sm">
            © {currentYear} [YOUR STARTUP NAME]. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-3 md:mt-0">
            <Link to="/privacy" className="text-black/50 hover:text-black text-xs md:text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-black/50 hover:text-black text-xs md:text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
