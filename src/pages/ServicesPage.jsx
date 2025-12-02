import { Link } from 'react-router-dom'
import { Smartphone, Globe, Palette, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'We build beautiful, high-performance mobile apps that users love.',
      features: [
        'Flutter & React Native development',
        'Native Android & iOS apps',
        'Custom UI/UX design',
        'API integration & backend',
        'App Store deployment',
        'Maintenance & updates'
      ],
      priceRange: 'Starting from $[X,XXX]'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Development',
      description: 'Modern, responsive websites that drive business growth.',
      features: [
        'Corporate websites',
        'Admin dashboards',
        'E-commerce platforms',
        'Django & Next.js',
        'Responsive design',
        'SEO optimization'
      ],
      priceRange: 'Starting from $[X,XXX]'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful interfaces that enhance user experience.',
      features: [
        'User research & testing',
        'Wireframing & prototyping',
        'Visual design',
        'Design systems',
        'Figma & Adobe XD',
        'Brand guidelines'
      ],
      priceRange: 'Starting from $[XXX]'
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Branding & Tech Consulting',
      description: 'Strategic guidance for your digital transformation.',
      features: [
        'Technology consultation',
        'Architecture planning',
        'Brand identity design',
        'Marketing materials',
        'Tech stack selection',
        'Project roadmapping'
      ],
      priceRange: 'Custom pricing'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Understand',
      description: 'We deep dive into your requirements, goals, and target audience.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create wireframes, prototypes, and visual designs for approval.'
    },
    {
      step: '03',
      title: 'Build',
      description: 'Develop your product using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Test',
      description: 'Rigorous testing to ensure quality, performance, and reliability.'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploy to production and provide ongoing support and maintenance.'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We help businesses turn ideas into beautiful mobile apps and websites
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-blue-600 font-semibold">{service.priceRange}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              A proven 5-step approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-blue-100 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-300 w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get a free quote and let's discuss your project
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
