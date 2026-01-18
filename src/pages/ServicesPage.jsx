import { Smartphone, Globe, Palette, Lightbulb, Database, Cloud, Cpu, ArrowRight, Zap, Clock, Shield, Code } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ServicesCarousel } from '../components/ui/ServicesCarousel'
import { Button as MovingBorderButton } from '../components/ui/MovingBorder'

// Service images
import appImg from '../assets/services/app.JPG'
import webImg from '../assets/services/web.JPG'
import uiuxImg from '../assets/services/uiux.JPG'
import startupImg from '../assets/services/startup.JPG'
import backendImg from '../assets/services/backend.JPG'
import cloudImg from '../assets/services/cloud.JPG'

const ServicesPage = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      category: 'Mobile',
      title: 'Mobile App Development',
      description: 'Native iOS, Android, and cross-platform apps built with Flutter and React Native. From concept to launch, we create apps that users love.',
      features: ['Cross-Platform Development', 'Native iOS & Android', 'App Store Optimization', 'Push Notifications', 'Offline Support', 'Analytics Integration'],
      color: 'from-[#FF6B35] to-[#FF8C42]',
      image: appImg,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      category: 'Web',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications using React, Next.js, and cutting-edge technologies that drive results.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization', 'Performance Tuning'],
      color: 'from-[#FB923C] to-[#FF6B35]',
      image: webImg,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      category: 'Design',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. Research-driven design with a focus on conversion and user satisfaction.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity', 'Interaction Design'],
      color: 'from-[#FF8C42] to-[#FB923C]',
      image: uiuxImg,
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      category: 'Startup',
      title: 'Product Building',
      description: 'End-to-end product development for startups. We help transform your ideas into market-ready products that scale.',
      features: ['MVP Development', 'Product Strategy', 'Scalable Architecture', 'Go-to-Market Support', 'User Feedback Loops', 'Iteration Cycles'],
      color: 'from-[#FF6B35] to-[#FB923C]',
      image: startupImg,
    },
    {
      icon: <Database className="w-8 h-8" />,
      category: 'Backend',
      title: 'Backend Development',
      description: 'Robust, scalable backend systems and APIs that power your applications efficiently and securely.',
      features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Microservices', 'Authentication', 'Third-party Integrations'],
      color: 'from-[#FB923C] to-[#FF8C42]',
      image: backendImg,
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      category: 'DevOps',
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation for seamless operations.',
      features: ['AWS & GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging', 'Auto-scaling', 'Security Hardening'],
      color: 'from-[#FF8C42] to-[#FF6B35]',
      image: cloudImg,
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
      {/* Services - Apple-style Carousel */}
      <section className="pt-6 pb-12 bg-gray-50 border-b border-[#FF6B35]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
              Our Services
            </h2>
            <p className="text-black/80 mt-4 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs.
            </p>
          </div>

          <ServicesCarousel items={services} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
                We're Different
              </h2>
              <p className="text-xl text-black/80 mb-8">
                We combine startup agility with professional expertise to deliver exceptional results. Your project deserves more than just code—it deserves a partner who cares.
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FB923C] text-white rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">{item.title}</h3>
                      <p className="text-black/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-black/20 rounded-2xl"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-black/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-black/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-black" />
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-black/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-black/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Globe className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-gray-50 rounded-2xl p-6 shadow-2xl border border-[#FF6B35]/30">
                <div className="text-4xl font-bold text-black mb-1">50+</div>
                <div className="text-black/70">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#FF6B35]/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#FF6B35]/20 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-black/70 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <MovingBorderButton
            as={Link}
            to="/contact"
            borderRadius="2rem"
            containerClassName="h-16 mx-auto"
            className="px-10 py-5 bg-[#FF6B35] text-white border-none font-bold hover:bg-[#FF8C42]"
            borderClassName="bg-[radial-gradient(var(--solo-primary)_40%,transparent_60%)]"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </MovingBorderButton>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
