import { useState } from 'react'
import { ExternalLink, Github, ArrowRight, Sparkles, Globe, Smartphone, Palette, Code, Filter, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web', 'Mobile', 'UI/UX', 'Full Product']

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
      category: 'Web',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      status: 'Live',
      type: 'Client Work',
      color: 'from-blue-500 to-cyan-500',
      icon: <Globe className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'AI Task Manager',
      description: 'Smart task management app with AI-powered prioritization and natural language task creation.',
      category: 'Full Product',
      tags: ['React Native', 'OpenAI', 'Firebase'],
      status: 'Beta',
      type: 'Our Product',
      color: 'from-purple-500 to-pink-500',
      icon: <Smartphone className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'Healthcare Booking App',
      description: 'Mobile application for booking medical appointments with doctors, clinics, and hospitals.',
      category: 'Mobile',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      status: 'Live',
      type: 'Client Work',
      color: 'from-green-500 to-emerald-500',
      icon: <Smartphone className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for a marketing SaaS platform with real-time data visualization.',
      category: 'Web',
      tags: ['Next.js', 'Chart.js', 'Tailwind'],
      status: 'Live',
      type: 'Client Work',
      color: 'from-orange-500 to-red-500',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Fitness App Design',
      description: 'Complete UI/UX design for a fitness tracking mobile application with gamification elements.',
      category: 'UI/UX',
      tags: ['Figma', 'Prototyping', 'User Research'],
      status: 'Delivered',
      type: 'Client Work',
      color: 'from-pink-500 to-rose-500',
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: 'Restaurant POS System',
      description: 'Point of sale system for restaurants with order management and inventory tracking.',
      category: 'Full Product',
      tags: ['React', 'Electron', 'SQLite'],
      status: 'Live',
      type: 'Client Work',
      color: 'from-indigo-500 to-blue-500',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Social Media App',
      description: 'Community-focused social platform with real-time messaging and content sharing.',
      category: 'Mobile',
      tags: ['React Native', 'Socket.io', 'MongoDB'],
      status: 'Development',
      type: 'Our Product',
      color: 'from-violet-500 to-purple-500',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'EdTech Platform',
      description: 'Online learning platform with video courses, quizzes, and progress tracking.',
      category: 'Web',
      tags: ['Next.js', 'AWS', 'Stripe'],
      status: 'Live',
      type: 'Client Work',
      color: 'from-teal-500 to-green-500',
      icon: <Globe className="w-6 h-6" />
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const featuredProjects = projects.filter(p => p.featured)

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5', label: 'Our Products' },
    { number: '95%', label: 'Success Rate' }
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
            <span className="text-white/70 text-sm">Our Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A showcase of our client work and in-house products. Every project is a story of collaboration and innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Highlights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white/20 rounded-xl"></div>
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 rounded-lg rotate-12"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    {project.icon}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all"></div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === 'Live' ? 'bg-green-500/80 text-white' :
                      project.status === 'Beta' ? 'bg-yellow-500/80 text-white' :
                      'bg-white/20 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-medium">{project.type}</span>
                    <span className="text-white/40 text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded-lg text-white/50 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                All Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mt-6 md:mt-0 flex-wrap">
              <Filter className="w-5 h-5 text-slate-400 mr-2" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                {/* Project Header */}
                <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                    {project.icon}
                  </div>

                  {/* View Button on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-medium text-sm">
                      <Eye className="w-4 h-4" />
                      View Project
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-green-500 text-white' :
                      project.status === 'Beta' ? 'bg-yellow-500 text-white' :
                      project.status === 'Development' ? 'bg-blue-500 text-white' :
                      'bg-slate-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-600 text-sm font-medium">{project.type}</span>
                    <span className="text-slate-400 text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 rounded-lg text-slate-500 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">In-House</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Our Products
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Beyond client work, we build our own products. These are passion projects that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.type === 'Our Product').map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Visual */}
                  <div className={`md:w-1/2 h-48 md:h-auto bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                      {product.icon}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === 'Beta' ? 'bg-yellow-500 text-white' :
                        product.status === 'Development' ? 'bg-blue-500 text-white' :
                        'bg-green-500 text-white'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                    <p className="text-slate-600 mb-6">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm font-medium">
                        <Github className="w-4 h-4" />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. We'd love to hear about your ideas.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
