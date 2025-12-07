import { Link } from 'react-router-dom'
import { Smartphone, Globe, Palette, Lightbulb, ArrowRight, Zap, Users, Code2, Sparkles, MousePointer, Rocket, Star } from 'lucide-react'

const HomePage = () => {
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

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'E-commerce platform with real-time inventory',
      tags: ['Live', 'Client Work'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AI Task Manager',
      description: 'AI-powered task management tool',
      tags: ['Beta', 'Our Product'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Healthcare App',
      description: 'Healthcare appointment booking app',
      tags: ['Live', 'Client Work'],
      color: 'from-green-500 to-emerald-600'
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

  const techStack = ['React', 'Flutter', 'Django', 'Next.js', 'Node.js', 'PostgreSQL', 'Firebase', 'AWS']

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section - Immersive Dark */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-20 w-20 h-20 border border-white/10 rounded-2xl rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl -rotate-12 hidden lg:block"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-400 rounded-full hidden lg:block"></div>
        <div className="absolute top-1/3 right-32 w-3 h-3 bg-purple-400 rounded-full hidden lg:block"></div>

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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto">
            For clients and for ourselves. A creative studio building apps, websites, and future-ready products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              See Our Projects
            </Link>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/50 text-sm hover:border-white/30 hover:text-white/80 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
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

      {/* Services Section - Bento Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-slate-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
            >
              View All Services 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work - Dark Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Featured Work
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center text-white/60 font-semibold hover:text-white group mt-6 md:mt-0"
            >
              View All Projects 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image Area */}
                <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white/20 rounded-xl"></div>
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 rounded-lg rotate-12"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          tag === 'Live'
                            ? 'bg-green-500/80 text-white'
                            : tag === 'Beta'
                            ? 'bg-yellow-500/80 text-white'
                            : 'bg-white/20 text-white'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              We Bring Startup Energy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-slate-50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 group-hover:bg-white text-white group-hover:text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/80 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-relaxed">
            "Working with this team was an absolute pleasure. They delivered beyond our expectations and the communication was excellent throughout."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4"></div>
            <div className="text-left">
              <div className="font-semibold text-slate-900">[Client Name]</div>
              <div className="text-slate-500 text-sm">[Company Name]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/20 rounded-full"></div>

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
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
