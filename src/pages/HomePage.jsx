import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Globe, Palette, Lightbulb, ArrowRight, Zap, Users, Code2, Sparkles, MousePointer, Rocket, Star } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { CanvasRevealEffect } from '../components/ui/CanvasRevealEffect'
import { Button as MovingBorderButton } from '../components/ui/MovingBorder'

const HomePage = () => {
  const [heroHovered, setHeroHovered] = useState(false)
  const services = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Web Development',
      description: 'Modern websites and web applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: 'Product Building',
      description: 'End-to-end digital product development',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Communication',
      description: 'We respond within hours, not days',
      stat: '< 2hrs'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Modern Tech Stack',
      description: 'Latest technologies and best practices',
      stat: '15+'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Startup Mindset',
      description: 'Agile, flexible, and innovation-focused',
      stat: '100%'
    }
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section - Immersive Dark with Canvas Reveal */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
        onMouseEnter={() => setHeroHovered(true)}
        onMouseLeave={() => setHeroHovered(false)}
      >
        {/* Canvas Reveal Effect */}
        <AnimatePresence>
          {heroHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0 z-0"
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [249, 115, 22],
                  [251, 146, 60],
                  [245, 158, 11],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                dotSize={2}
                showGradient={false}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Radial gradient fade */}
        <div className="absolute inset-0 [mask-image:radial-gradient(600px_at_center,white,transparent)] bg-slate-900/50 z-[1]" />

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-20 -right-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-[3]"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-20 w-20 h-20 border border-white/10 rounded-2xl rotate-12 hidden lg:block z-[3]"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl -rotate-12 hidden lg:block z-[3]"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-orange-400 rounded-full hidden lg:block z-[3]"></div>
        <div className="absolute top-1/3 right-32 w-3 h-3 bg-orange-300 rounded-full hidden lg:block z-[3]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/70 text-sm">Creative Tech Studio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            We Build
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Software Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto">
            For clients and for ourselves. A creative studio building apps, websites, and future-ready products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MovingBorderButton
              as={Link}
              to="/contact"
              borderRadius="2rem"
              containerClassName="h-14"
              className="px-8 py-4 bg-orange-500 border-orange-400/20 font-semibold hover:bg-orange-600 transition-colors group"
              borderClassName="bg-[radial-gradient(var(--orange-500)_40%,transparent_60%)]"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MovingBorderButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/40">
            <span className="text-xs mb-2">Scroll</span>
            <MousePointer className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Message from Team */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">A Message From Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
            When You Grow, We Grow
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            <p>
              <span className="text-white font-semibold">We're growing, just like you.</span>
              <br />
              That's why we take every project seriously and never cut corners.
            </p>
            <p>
              Your success drives our success, so we handle your product with care, responsibility, and extra effort.
            </p>
          </div>
          <div className="mt-10 inline-flex items-center px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30">
            <Users className="w-5 h-5 text-orange-400 mr-3" />
            <span className="text-white font-medium">— Team Devople</span>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-slate-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-700"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 group"
            >
              View All Services 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              We Bring Startup Energy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-slate-700 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 group-hover:bg-white text-white group-hover:text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-white group-hover:text-white mb-2 transition-colors">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 group-hover:text-white/80 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-orange-400 fill-orange-400" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            "Working with this team was an absolute pleasure. They delivered beyond our expectations and the communication was excellent throughout."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mr-4"></div>
            <div className="text-left">
              <div className="font-semibold text-white">[Client Name]</div>
              <div className="text-slate-400 text-sm">[Company Name]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-500/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-orange-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-500/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-orange-500/20 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Rocket className="w-4 h-4 text-white mr-2" />
            <span className="text-white/80 text-sm">Ready to launch your idea?</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Ready to turn your idea into reality? We'd love to hear from you and start creating something amazing.
          </p>
          <MovingBorderButton
            as={Link}
            to="/contact"
            borderRadius="2rem"
            containerClassName="h-16 mx-auto"
            className="px-10 py-5 bg-orange-500 text-white border-none font-bold hover:bg-orange-600"
            borderClassName="bg-[radial-gradient(var(--orange-500)_40%,transparent_60%)]"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </MovingBorderButton>
        </div>
      </section>
    </div>
  )
}

export default HomePage
