import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import devopleLogo from '../assets/logo/Devople.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Contact Button */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-white text-base md:text-lg mb-3 text-center">
              Require additional details or<br />Ready to start your project?
            </h3>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FB923C] text-white font-semibold rounded-lg hover:from-[#FF8C42] hover:to-[#FF6B35] transition-all duration-300 shadow-lg hover:shadow-[#FF6B35]/50"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-start gap-1 md:gap-2 text-white/50 text-[10px] md:text-sm">
            <span>© {currentYear} Devople.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
            <span>•</span>
            <Link to="/privacy" className="text-[#FF6B35] hover:text-[#FF8C42] transition-colors whitespace-nowrap">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/terms" className="text-[#FF6B35] hover:text-[#FF8C42] transition-colors whitespace-nowrap">
              Terms
            </Link>
          </div>
          <div className="flex space-x-2 md:space-x-4 flex-shrink-0">
            <a href="[LINKEDIN_URL]" className="hover:text-[#FF6B35] transition-colors">
              <Linkedin size={16} className="md:w-5 md:h-5" />
            </a>
            <a href="[INSTAGRAM_URL]" className="hover:text-[#FF6B35] transition-colors">
              <Instagram size={16} className="md:w-5 md:h-5" />
            </a>
            <a href="mailto:[YOUR_EMAIL]" className="hover:text-[#FF6B35] transition-colors">
              <Mail size={16} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
