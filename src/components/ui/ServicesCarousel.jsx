import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

export const ServiceCard = ({ card, index }) => {
  return (
    <div className="rounded-3xl h-[26rem] w-72 sm:h-[28rem] sm:w-80 md:h-[30rem] md:w-96 overflow-hidden flex flex-col relative group">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`} />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

      {/* Content - Starting from top */}
      <div className="relative z-10 p-6 sm:p-7 md:p-8 flex flex-col h-full">
        {/* Icon & Category Row */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
            {card.category}
          </p>
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            {card.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-xl sm:text-2xl md:text-2xl mb-3">
          {card.title}
        </h3>
        
        {/* Description */}
        <p className="text-white/70 text-sm md:text-base mb-5 leading-relaxed line-clamp-4 sm:line-clamp-none">
          {card.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mt-auto">
          {card.features.slice(0, 5).map((feature, i) => (
            <div key={i} className="flex items-center text-sm">
              <Check className="w-4 h-4 text-white/80 mr-2 flex-shrink-0" />
              <span className="text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-3xl" />
    </div>
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
