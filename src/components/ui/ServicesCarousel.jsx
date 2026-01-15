import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export const ServiceCard = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="relative z-10 max-w-5xl mx-auto my-10 bg-white rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className={`relative h-80 bg-gradient-to-br ${card.color}`}>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {card.icon}
                  </div>
                  <p className="text-sm uppercase tracking-wider text-white/70 mb-2">{card.category}</p>
                  <h2 className="text-4xl font-bold">{card.title}</h2>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-14">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {card.description}
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {card.features.map((feature, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl">
                    <div className={`w-8 h-8 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mr-3`}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Card */}
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="rounded-3xl bg-slate-100 h-80 w-56 md:h-[28rem] md:w-80 overflow-hidden flex flex-col items-start justify-end relative cursor-pointer group"
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`} />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
        
        {/* Icon */}
        <div className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {card.icon}
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2">
            {card.category}
          </p>
          <h3 className="text-white font-bold text-xl md:text-2xl max-w-xs">
            {card.title}
          </h3>
          <p className="text-white/60 text-sm mt-2 line-clamp-2 max-w-xs">
            {card.description}
          </p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </motion.div>
    </>
  )
}

export const ServicesCarousel = ({ items }) => {
  const carouselRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons)
      return () => carousel.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mb-6 mr-4">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollLeft 
              ? 'bg-slate-100 hover:bg-slate-200 text-slate-600' 
              : 'bg-slate-50 text-slate-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollRight 
              ? 'bg-slate-100 hover:bg-slate-200 text-slate-600' 
              : 'bg-slate-50 text-slate-300 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-8 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="w-4 md:w-[10%] flex-shrink-0" />
        {items.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0"
          >
            <ServiceCard card={card} index={index} />
          </motion.div>
        ))}
        <div className="w-4 md:w-[10%] flex-shrink-0" />
      </div>
    </div>
  )
}

export default ServicesCarousel
