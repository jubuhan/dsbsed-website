import { Link } from 'react-router-dom'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import devopleLogo from '../assets/logo/Devople.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white/80 sticky bottom-0 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12 pb-4 md:pb-6">
        <div className="flex flex-col items-center gap-8">
          {/* Contact Button */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-white text-lg md:text-2xl lg:text-3xl mb-5 text-center leading-tight tracking-tight">
              Require additional details or<br />Ready to start your project?
            </h3>
            <Link 
              to="/contact" 
              className="group inline-flex items-center px-5 py-2 md:px-8 md:py-3 bg-[#FF6B35] text-white font-semibold text-xs md:text-base rounded transition-all duration-1000 hover:duration-500 shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_#FBC638] -skew-x-[15deg]"
            >
              <span className="skew-x-[15deg]">Contact</span>
              <span className="skew-x-[15deg] ml-4 transition-all duration-500 group-hover:ml-10">
                <svg className="w-4 h-4" viewBox="0 0 46 16" xmlns="http://www.w3.org/2000/svg">
                  <path className="transition-all duration-400 -translate-x-[60%] group-hover:translate-x-0 group-hover:animate-[color_anim_1s_infinite_0.6s]" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" fill="white"/>
                  <path className="transition-all duration-500 -translate-x-[30%] group-hover:translate-x-0 group-hover:animate-[color_anim_1s_infinite_0.4s]" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" fill="white"/>
                  <path className="group-hover:animate-[color_anim_1s_infinite_0.2s]" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" fill="white"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-6 flex flex-row justify-between items-center gap-2">
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
          <ul className="flex space-x-2 flex-shrink-0">
            <li className="list-none">
              <a 
                href="#" 
                className="group relative w-7 h-7 md:w-8 md:h-8 bg-white text-center flex items-center justify-center block rounded-full overflow-hidden border-2 border-white z-10"
              >
                <Linkedin className="relative text-gray-900 transition-all duration-500 z-30 group-hover:text-white group-hover:rotate-y-360 w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="absolute top-full left-0 w-full h-full bg-[#0077b5] transition-all duration-500 z-20 group-hover:top-0"></span>
              </a>
            </li>
            <li className="list-none">
              <a 
                href="#" 
                className="group relative w-7 h-7 md:w-8 md:h-8 bg-white text-center flex items-center justify-center block rounded-full overflow-hidden border-2 border-white z-10"
              >
                <Instagram className="relative text-gray-900 transition-all duration-500 z-30 group-hover:text-white group-hover:rotate-y-360 w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="absolute top-full left-0 w-full h-full bg-gradient-to-br from-[#F58529] to-[#DD2A7B] transition-all duration-500 z-20 group-hover:top-0"></span>
              </a>
            </li>
            <li className="list-none">
              <a 
                href="mailto:hello@devople.com" 
                className="group relative w-7 h-7 md:w-8 md:h-8 bg-white text-center flex items-center justify-center block rounded-full overflow-hidden border-2 border-white z-10"
              >
                <Mail className="relative text-gray-900 transition-all duration-500 z-30 group-hover:text-white group-hover:rotate-y-360 w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="absolute top-full left-0 w-full h-full bg-[#FF6B35] transition-all duration-500 z-20 group-hover:top-0"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
