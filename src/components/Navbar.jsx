import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import devopleLogo from '../assets/logo/Devople.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Logo - Fixed Position Left - Only visible when menu is open */}
      {isOpen && (
        <Link 
          to="/" 
          className="fixed top-5 left-5 z-[60] opacity-0 animate-fade-in" 
          onClick={() => setIsOpen(false)}
          style={{
            animation: 'fadeIn 0.3s ease-in-out 0.6s forwards'
          }}
        >
          <img src={devopleLogo} alt="Devople" className="h-10 md:h-12 w-auto" />
        </Link>
      )}

      {/* Hamburger Menu Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-5 right-5 z-[60] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors shadow-lg ${
          isOpen ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <div className="relative w-5 h-5">
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-2/5 h-0.5 bg-black transition-all duration-600 ease-in-out ${
              isOpen ? 'scale-x-0' : 'scale-x-100'
            }`}
            style={{ transform: isOpen ? 'translateX(-50%) scaleX(0)' : 'translateX(-50%) translateY(-8px)' }}
          />
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-0.5 transition-all duration-600 ease-in-out ${
              isOpen ? 'bg-white rotate-45' : 'bg-black rotate-0'
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-2/5 h-0.5 transition-all duration-600 ease-in-out ${
              isOpen ? 'bg-white -rotate-45' : 'bg-black rotate-0'
            }`}
            style={{ transform: isOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translateX(-50%) translateY(8px)' }}
          />
        </div>
      </button>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed top-0 h-full w-full bg-black z-[55] transition-all duration-600 ease-in-out ${
          isOpen ? 'right-0' : '-right-full'
        }`}
      >
        <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 list-none text-center w-full px-4">
          {navItems.map((item, index) => (
            <li key={item.path} className="my-6 md:my-8 h-[50px] md:h-[60px]">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`relative inline-block text-3xl md:text-4xl lg:text-5xl font-medium px-8 md:px-12 py-3 md:py-4 text-white hover:text-[#FF6B35] transition-colors duration-200 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
                }`}
                style={{
                  transitionDelay: isOpen ? `${0.6 + index * 0.1}s` : '0s',
                  transitionTimingFunction: 'cubic-bezier(0.1, 1.3, 0.3, 1)',
                  lineHeight: '50px',
                  transitionProperty: isOpen ? 'opacity, transform' : 'color'
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
