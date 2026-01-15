import { MessageSquare, Palette, Code, Rocket, ArrowRight, Sparkles, Users, Zap, Clock, Shield, Target, Lightbulb, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedProcessCards } from '../components/ui/AnimatedProcessCards'

const HowWeWorkPage = () => {
  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your vision, goals, and target audience. Through in-depth discussions and research, we define the project scope and create a strategic roadmap.',
      icon: <Lightbulb className="w-8 h-8" />,
      details: ['Requirement Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Our designers create wireframes and high-fidelity prototypes that bring your vision to life. We iterate based on your feedback until the design is perfect.',
      icon: <Palette className="w-8 h-8" />,
      details: ['Wireframing', 'UI/UX Design', 'Interactive Prototypes', 'Design Review'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Using agile methodology, we build your product in sprints with regular demos and feedback sessions. Transparency and communication are our priorities.',
      icon: <Code className="w-8 h-8" />,
      details: ['Agile Sprints', 'Code Reviews', 'Regular Updates', 'Quality Assurance'],
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your product works flawlessly across all devices and scenarios. We catch bugs before your users do.',
      icon: <Shield className="w-8 h-8" />,
      details: ['Automated Testing', 'Manual QA', 'Performance Testing', 'Security Audits'],
      color: 'from-green-500 to-teal-500'
    },
    {
      step: '05',
      title: 'Launch & Deploy',
      description: 'We handle the deployment process, ensuring a smooth launch. From app store submissions to server configuration, we\'ve got you covered.',
      icon: <Rocket className="w-8 h-8" />,
      details: ['Deployment Setup', 'Store Submissions', 'DNS Configuration', 'Launch Support'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      step: '06',
      title: 'Support & Growth',
      description: 'Our relationship doesn\'t end at launch. We provide ongoing support, maintenance, and help you scale as your business grows.',
      icon: <Target className="w-8 h-8" />,
      details: ['24/7 Support', 'Bug Fixes', 'Feature Updates', 'Performance Optimization'],
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const principles = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration First',
      description: 'We work as an extension of your team, not just a vendor. Your success is our success.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Agile & Flexible',
      description: 'We adapt quickly to changes and new requirements, keeping your project on track.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Transparent Communication',
      description: 'Regular updates, honest timelines, and clear communication at every step.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Quality Over Quantity',
      description: 'We focus on delivering exceptional work, not just meeting deadlines.'
    }
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a full mobile app could take 2-4 months. We\'ll provide a detailed timeline during our discovery phase.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, React Native, Flutter, Node.js, Python, and cloud services like AWS and Google Cloud. We choose the best tech stack for your specific needs.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We use tools like Slack, Notion, and regular video calls to keep you updated. You\'ll have direct access to our team and receive weekly progress reports.'
    },
    {
      question: 'What happens after the project is launched?',
      answer: 'We offer ongoing support and maintenance packages. We can also continue working with you on new features and improvements as your product evolves.'
    }
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/70 text-sm">Our Process</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            How We <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A transparent, collaborative process designed to bring your vision to life efficiently and effectively.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              From Idea to Launch
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Every successful project follows a proven process. Here's how we turn your ideas into reality.
            </p>
          </div>

          <AnimatedProcessCards steps={process} />
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Our Working Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
                <p className="text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-slate-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowWeWorkPage
