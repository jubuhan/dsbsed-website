import { Palette, Code, Rocket, ArrowRight, Users, Zap, Clock, Shield, Target, Lightbulb, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedProcessCards } from '../components/ui/AnimatedProcessCards'
import { Button as MovingBorderButton } from '../components/ui/MovingBorder'

// Process images
import discoveryImg from '../assets/howwework/discovery.jpg'
import designImg from '../assets/howwework/design.jpg'
import developmentImg from '../assets/howwework/development.jpg'
import testingImg from '../assets/howwework/testing.jpg'
import launchImg from '../assets/howwework/launch.jpg'
import supportImg from '../assets/howwework/support.jpg'

// Principle images
import collaborationImg from '../assets/howwework/collaboration.jpg'
import agileImg from '../assets/howwework/agile.jpg'
import communicationImg from '../assets/howwework/communication.jpg'
import qualityImg from '../assets/howwework/quality.jpg'

const HowWeWorkPage = () => {
  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your vision, goals, and target audience. Through in-depth discussions and research, we define the project scope and create a strategic roadmap.',
      icon: <Lightbulb className="w-8 h-8" />,
      details: ['Requirement Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning'],
      color: 'from-[#FF6B35] to-[#FF8C42]',
      image: discoveryImg
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Our designers create wireframes and high-fidelity prototypes that bring your vision to life. We iterate based on your feedback until the design is perfect.',
      icon: <Palette className="w-8 h-8" />,
      details: ['Wireframing', 'UI/UX Design', 'Interactive Prototypes', 'Design Review'],
      color: 'from-[#FB923C] to-[#FF6B35]',
      image: designImg
    },
    {
      step: '03',
      title: 'Development',
      description: 'Using agile methodology, we build your product in sprints with regular demos and feedback sessions. Transparency and communication are our priorities.',
      icon: <Code className="w-8 h-8" />,
      details: ['Agile Sprints', 'Code Reviews', 'Regular Updates', 'Quality Assurance'],
      color: 'from-[#FF8C42] to-[#FB923C]',
      image: developmentImg
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your product works flawlessly across all devices and scenarios. We catch bugs before your users do.',
      icon: <Shield className="w-8 h-8" />,
      details: ['Automated Testing', 'Manual QA', 'Performance Testing', 'Security Audits'],
      color: 'from-[#FF6B35] to-[#FB923C]',
      image: testingImg
    },
    {
      step: '05',
      title: 'Launch & Deploy',
      description: 'We handle the deployment process, ensuring a smooth launch. From app store submissions to server configuration, we\'ve got you covered.',
      icon: <Rocket className="w-8 h-8" />,
      details: ['Deployment Setup', 'Store Submissions', 'DNS Configuration', 'Launch Support'],
      color: 'from-[#FB923C] to-[#FF8C42]',
      image: launchImg
    },
    {
      step: '06',
      title: 'Support & Growth',
      description: 'Our relationship doesn\'t end at launch. We provide ongoing support, maintenance, and help you scale as your business grows.',
      icon: <Target className="w-8 h-8" />,
      details: ['24/7 Support', 'Bug Fixes', 'Feature Updates', 'Performance Optimization'],
      color: 'from-[#FF8C42] to-[#FF6B35]',
      image: supportImg
    }
  ]

  const principles = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration First',
      description: 'We work as an extension of your team, not just a vendor. Your success is our success.',
      image: collaborationImg
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Agile & Flexible',
      description: 'We adapt quickly to changes and new requirements, keeping your project on track.',
      image: agileImg
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Transparent Communication',
      description: 'Regular updates, honest timelines, and clear communication at every step.',
      image: communicationImg
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Quality Over Quantity',
      description: 'We focus on delivering exceptional work, not just meeting deadlines.',
      image: qualityImg
    }
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Process Timeline */}
      <section className="pt-4 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              From Idea to Launch
            </h2>
            <p className="text-black/80 mt-2 max-w-2xl mx-auto text-sm md:text-base">
              Every successful project follows a proven process. Here's how we turn your ideas into reality.
            </p>
          </div>

          <AnimatedProcessCards steps={process} />
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3">
              Our Working Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="relative rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group border border-[#FF6B35]/30 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${principle.image})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-[#FF6B35]/90 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm text-white mb-6 group-hover:bg-white group-hover:text-[#FF6B35] transition-all duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-white/90">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-black/80 mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MovingBorderButton
              as={Link}
              to="/contact"
              borderRadius="2rem"
              containerClassName="h-14"
              className="px-8 py-4 bg-[#FF6B35] text-white border-none font-semibold group hover:bg-[#FF8C42]"
              borderClassName="bg-[radial-gradient(var(--solo-primary)_40%,transparent_60%)]"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MovingBorderButton>
            <MovingBorderButton
              as={Link}
              to="/services"
              borderRadius="2rem"
              containerClassName="h-14"
              className="px-8 py-4 bg-transparent text-black border-black/50 font-semibold hover:bg-black/10 transition-colors"
              borderClassName="bg-[radial-gradient(var(--pink-500)_40%,transparent_60%)]"
            >
              View Our Services
            </MovingBorderButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowWeWorkPage
