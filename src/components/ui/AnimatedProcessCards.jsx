import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const AnimatedProcessCards = ({ steps }) => {
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % steps.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + steps.length) % steps.length)
  }

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [autoplay, steps.length])

  const isActive = (index) => index === active

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10

  return (
    <div 
      className="max-w-sm md:max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-6"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Left side - Stacked Cards */}
        <div className="relative h-48 sm:h-56 md:h-72 w-full">
          <AnimatePresence>
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : steps.length - index,
                  y: isActive(index) ? [0, -40, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <div className="w-full h-full rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl">
                  {/* Background Image */}
                  {step.image && (
                    <div className="absolute inset-0">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Fallback gradient if no image */}
                  {!step.image && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`} />
                  )}
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                    {/* Step number */}
                    <div className="flex justify-between items-start">
                      <span className="text-white/30 text-5xl sm:text-6xl md:text-8xl font-bold leading-none">{step.step}</span>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-between py-4 min-h-[320px] md:min-h-[360px]">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-1"
          >
            <span className={`inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3 bg-gradient-to-r ${steps[active].color} text-white`}>
              Step {steps[active].step}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3">
              {steps[active].title}
            </h3>
            <motion.p className="text-xs sm:text-sm md:text-base text-black/80 leading-relaxed mb-3 md:mb-4">
              {steps[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 5 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            
            {/* Details tags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {steps[active].details.map((detail, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                  className="px-2.5 py-1.5 md:px-4 md:py-2 bg-gray-100 border border-[#FF6B35]/30 rounded-full text-xs md:text-sm text-black/90 font-medium"
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-3 md:gap-4 pt-6 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-100 border border-[#FF6B35]/30 hover:bg-[#FF6B35] flex items-center justify-center group transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-black/80 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-100 border border-[#FF6B35]/30 hover:bg-[#FF6B35] flex items-center justify-center group transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-black/80 group-hover:text-white transition-colors" />
            </button>
            
            {/* Progress dots */}
            <div className="flex gap-2 ml-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active 
                      ? 'w-8 bg-gradient-to-r from-[#FF6B35] to-[#FB923C]' 
                      : 'w-2 bg-black/20 hover:bg-black/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedProcessCards
