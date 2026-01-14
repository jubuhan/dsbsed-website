import { Smartphone, Globe, Palette, Lightbulb, Code, Database, Cloud, Cpu, Check, ArrowRight, Sparkles, Zap, Clock, MessageSquare, Shield, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native iOS, Android, and cross-platform apps built with Flutter and React Native. From concept to launch.',
      features: ['Cross-Platform Development', 'Native iOS & Android', 'App Store Optimization', 'Push Notifications'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications using React, Next.js, and cutting-edge technologies.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. Research-driven design with a focus on conversion.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Product Building',
      description: 'End-to-end product development for startups. We help transform your ideas into market-ready products.',
      features: ['MVP Development', 'Product Strategy', 'Scalable Architecture', 'Go-to-Market Support'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust, scalable backend systems and APIs that power your applications efficiently.',
      features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Microservices'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation for seamless operations.',
      features: ['AWS & GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your vision, goals, and requirements to understand exactly what you need.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our team creates wireframes and designs that align with your brand and user expectations.',
      icon: <Palette className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Develop',
      description: 'We build your product using agile methodology with regular updates and feedback loops.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'Launch your product with confidence, backed by thorough testing and optimization.',
      icon: <Rocket className="w-6 h-6" />
    }
  ]

  const whyUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Turnaround',
      description: 'We deliver quality work on tight deadlines without compromising on quality.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Communication',
      description: 'Stay updated with regular progress reports and quick response times.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Guaranteed',
      description: 'Every project goes through rigorous testing and quality assurance.'
    }
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/70 text-sm">What We Offer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From concept to launch, we offer comprehensive digital solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services - Horizontal Scroll */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Our Services
            </h2>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Cards */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 snap-center first:ml-4 last:mr-4"
                >
                  <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:scale-105 border border-slate-100 h-full">
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] rounded-3xl transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {service.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-6">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-slate-600">
                            <Check className={`w-4 h-4 mr-2 text-transparent bg-gradient-to-r ${service.color} bg-clip-text`} style={{ color: service.color.includes('blue') ? '#3B82F6' : service.color.includes('purple') ? '#A855F7' : service.color.includes('orange') ? '#F97316' : service.color.includes('green') ? '#22C55E' : service.color.includes('indigo') ? '#6366F1' : '#EC4899' }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Corner Decoration */}
                    <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-6 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 animate-pulse" />
                Swipe to explore
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Dark */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Our Process
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              A streamlined approach that ensures successful delivery every time.
            </p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrollable Cards */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 snap-center first:ml-4 last:mr-4"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-2' : '2'}deg)` }}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:rotate-0 h-full">
                    {/* Step Number */}
                    <div className="text-7xl font-bold text-white/5 absolute top-4 right-4">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10">
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-white/60 relative z-10">{step.description}</p>
                    
                    {/* Progress indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      {process.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' : 'w-2 bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-6 text-white/40 text-sm">
              <span className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 animate-pulse" />
                Swipe to explore
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                We're Different
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We combine startup agility with professional expertise to deliver exceptional results. Your project deserves more than just code—it deserves a partner who cares.
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white/20 rounded-2xl"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-white/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-slate-500">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
