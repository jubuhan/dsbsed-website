import { Link } from 'react-router-dom'
import { Smartphone, Globe, Palette, Lightbulb, ArrowRight, Zap, Users, Code2, Sparkles, MousePointer, Rocket, Star, Database, Cloud } from 'lucide-react'
import { motion } from 'motion/react'
import { CanvasRevealEffect } from '../components/ui/CanvasRevealEffect'
import { Button as MovingBorderButton } from '../components/ui/MovingBorder'
import serviceBg from '../assets/home/service.png'
import devopleLogo from '../assets/logo/Devople.png'
import dLogo from '../assets/logo/D.png'
import fastCommunicationImg from '../assets/home/fast-communication.jpg'
import techStackImg from '../assets/home/tech-stack.jpg'
import startupMindsetImg from '../assets/home/startup-mindset.jpg'
import teamDevopleImg from '../assets/home/teamdevople.png'

const HomePage = () => {
  const services = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Mobile App Development',
      color: 'from-[#FF6B35] to-[#FF8C42]'
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Web Development',
      color: 'from-[#FB923C] to-[#FF6B35]'
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'UI/UX Design',
      color: 'from-[#FF8C42] to-[#FB923C]'
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: 'Product Building',
      color: 'from-[#FF6B35] to-[#FB923C]'
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: 'Backend Development',
      color: 'from-[#FB923C] to-[#FF8C42]'
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: 'Cloud & DevOps',
      color: 'from-[#FF8C42] to-[#FF6B35]'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Communication',
      description: 'We respond within hours, not days',
      stat: '< 2hrs',
      image: fastCommunicationImg
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Modern Tech Stack',
      description: 'Latest technologies and best practices',
      stat: '15+',
      image: techStackImg
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Startup Mindset',
      description: 'Agile, flexible, and innovation-focused',
      stat: '100%',
      image: startupMindsetImg
    }
  ]

  return (
    <div className="animate-fade-in overflow-hidden bg-white">
      {/* Hero Section - Immersive Dark with Canvas Reveal */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-8">
          {/* Main Logo */}
          <div className="flex justify-center mb-2">
            <img src={devopleLogo} alt="Devople" className="w-72 md:w-[28rem] lg:w-[40rem] h-auto" loading="eager" />
          </div>

          <p className="text-sm md:text-base text-white/60 mb-8 max-w-xl mx-auto">
            A creative studio building apps, websites, and future-ready products.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center px-5 py-2 md:px-8 md:py-3 bg-[#FF6B35] text-white rounded font-semibold transition-all duration-1000 hover:duration-500 shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_#FBC638] -skew-x-[15deg] text-xs md:text-sm"
            >
              <span className="skew-x-[15deg]">Work With Us</span>
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

      </section>

      {/* Message from Team */}
      <section className="py-12 md:py-16 pb-6 bg-white border-t border-[#FF6B35]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
            {/* Flip Card */}
            <div className="flex-shrink-0 lg:ml-8">
              <div 
                className="w-48 h-64 md:w-72 md:h-96 perspective-1000 cursor-pointer group transform -rotate-3"
                style={{ perspective: '1000px', WebkitPerspective: '1000px' }}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d'
                  }}
                >
                  {/* Front */}
                  <div 
                    className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FB923C] shadow-xl overflow-hidden flex flex-col"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      zIndex: 2
                    }}
                  >
                    <img 
                      src={teamDevopleImg} 
                      alt="Team Devople" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="relative z-10 flex flex-col items-center pt-6 md:pt-12">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center mb-2 md:mb-4 shadow-lg">
                        <img src={dLogo} alt="D" className="w-8 h-8 md:w-11 md:h-11" />
                      </div>
                      <h3 className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">Team Devople</h3>
                    </div>
                  </div>
                  {/* Back */}
                  <div 
                    className="absolute w-full h-full rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#FB923C] text-white p-4 md:p-8 text-center [transform:rotateY(180deg)]"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      WebkitTransform: 'rotateY(180deg)',
                      zIndex: 1
                    }}
                  >
                    <Sparkles className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-4" />
                    <p className="font-semibold text-base md:text-xl mb-2 md:mb-3">Our Promise</p>
                    <p className="text-white/90 text-xs md:text-base leading-relaxed">
                      We treat every project like our own. Your vision becomes our mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1 relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#FF6B35]/10 rounded-full blur-2xl hidden lg:block"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FB923C]/10 rounded-full blur-3xl hidden lg:block"></div>
              
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-4 md:mb-6">
                <span className="text-[#FF6B35] font-semibold text-xs md:text-sm uppercase tracking-wider">A Message From Us</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-8 leading-tight">
                When You Grow,
                <span className="block bg-gradient-to-r from-[#FF6B35] to-[#FB923C] bg-clip-text text-transparent">We Grow</span>
              </h2>
              
              <blockquote className="relative pl-4 md:pl-6 border-l-2 border-[#FF6B35]/50 italic text-sm md:text-xl text-black/80 leading-relaxed space-y-4">
                <p>
                  "<span className="text-black font-semibold">We're growing, just like you.</span> That's why we take every project seriously and never cut corners."
                </p>
                <p>
                  "Your success drives our success, so we handle your product with care, responsibility, and extra effort."
                </p>
                <p>
                  "We believe in building relationships, not just products. Trust us with your idea, and we'll give it everything we've got."
                </p>
              </blockquote>
              
              <div className="mt-6 md:mt-10 inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FB923C]/20 border border-[#FF6B35]/30 backdrop-blur-sm shadow-lg shadow-[#FF6B35]/10">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#FF6B35] to-[#FB923C] rounded-full flex items-center justify-center mr-2 md:mr-3">
                  <Users className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-black font-medium text-sm md:text-base">— Team Devople</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="relative py-12 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl shadow-2xl py-10 px-6 border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,107,53,0.3)] group">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={serviceBg} 
                alt="Services background"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
              <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">What We Do</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/40"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} text-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/services"
                className="group inline-flex items-center px-5 py-2 md:px-8 md:py-3 bg-[#FF6B35] text-white rounded font-semibold transition-all duration-1000 hover:duration-500 shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_#FBC638] -skew-x-[15deg] text-xs md:text-base"
              >
                <span className="skew-x-[15deg]">View All Services</span>
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
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats Section */}
      <section className="py-12 pt-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3">
              We Bring Startup Energy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative text-center p-6 rounded-2xl overflow-hidden border border-[#FF6B35]/30 transition-all duration-500 hover:scale-105"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 group-hover:from-[#FF6B35]/70 group-hover:to-[#FB923C]/70 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm group-hover:bg-white text-white group-hover:text-[#FF6B35] rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 transition-colors">
                    {item.stat}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm transition-colors">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="relative py-16 overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#FF6B35]/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#FF6B35]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#FF6B35]/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#FF6B35]/20 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-black/20 mb-8">
            <Rocket className="w-4 h-4 text-black mr-2" />
            <span className="text-black/80 text-sm">Ready to launch your idea?</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-black/70 mb-10 max-w-2xl mx-auto">
            Ready to turn your idea into reality? We'd love to hear from you and start creating something amazing.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-5 py-2 md:px-8 md:py-3 bg-[#FF6B35] text-white rounded font-bold transition-all duration-1000 hover:duration-500 shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_#FBC638] -skew-x-[15deg] text-xs md:text-base"
          >
            <span className="skew-x-[15deg]">Start Your Project</span>
            <span className="skew-x-[15deg] ml-4 transition-all duration-500 group-hover:ml-12">
              <svg className="w-5 h-5" viewBox="0 0 46 16" xmlns="http://www.w3.org/2000/svg">
                <path className="transition-all duration-400 -translate-x-[60%] group-hover:translate-x-0 group-hover:animate-[color_anim_1s_infinite_0.6s]" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" fill="white"/>
                <path className="transition-all duration-500 -translate-x-[30%] group-hover:translate-x-0 group-hover:animate-[color_anim_1s_infinite_0.4s]" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" fill="white"/>
                <path className="group-hover:animate-[color_anim_1s_infinite_0.2s]" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" fill="white"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
