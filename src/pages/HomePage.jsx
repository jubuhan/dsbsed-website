import { Link } from 'react-router-dom'
import { Smartphone, Globe, Palette, Lightbulb, ArrowRight, Zap, Users, Code2 } from 'lucide-react'

const HomePage = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern websites and web applications'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Product Building',
      description: 'End-to-end digital product development'
    }
  ]

  const featuredProjects = [
    {
      title: '[CLIENT PROJECT NAME 1]',
      description: 'E-commerce platform with real-time inventory',
      tags: ['Live', 'Client Work'],
      image: '[PROJECT_IMAGE_URL]'
    },
    {
      title: '[INTERNAL PRODUCT 1]',
      description: 'AI-powered task management tool',
      tags: ['Beta', 'Our Product'],
      image: '[PROJECT_IMAGE_URL]'
    },
    {
      title: '[CLIENT PROJECT NAME 2]',
      description: 'Healthcare appointment booking app',
      tags: ['Live', 'Client Work'],
      image: '[PROJECT_IMAGE_URL]'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Communication',
      description: 'We respond within hours, not days'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Modern Tech Stack',
      description: 'Latest technologies and best practices'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Startup Mindset',
      description: 'Agile, flexible, and innovation-focused'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              We build digital products —{' '}
              <span className="gradient-text">for clients and for ourselves</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              A creative tech studio building apps, websites, and future-ready products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                Work With Us
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                See Our Projects
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-slate-600">
              Full-stack development services for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600">
              A mix of client projects and our own products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">[Project Mockup]</span>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tag === 'Live'
                            ? 'bg-green-100 text-green-700'
                            : tag === 'Beta'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-slate-600">
              We bring startup energy to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to turn your idea into reality? We'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
