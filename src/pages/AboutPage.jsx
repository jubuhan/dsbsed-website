import { Target, Heart, Zap, Users, Code2, Rocket, Coffee } from 'lucide-react'
import { HoverEffect } from '../components/ui/card-hover-effect'
import jubuhan from '../assets/founders/jubuhan.png'
import alan from '../assets/founders/alan.png'
import kali from '../assets/founders/kali.png'
import adhil from '../assets/founders/adhil.png'
import amjed from '../assets/team/amjed.png'
import anjali from '../assets/team/anjali.png'
import darshana from '../assets/team/darshana.png'
import joyal from '../assets/team/joyal.png'
import mehrin from '../assets/team/mehrin.png'
import ramees from '../assets/team/ramees.png'
import aina from '../assets/team/aina.png'

const AboutPage = () => {
  const team = [
    {
      name: 'Jubuhan',
      role: 'Co-Founder',
      image: jubuhan,
      bio: 'full-stack app and web developer'
    },
    {
      name: 'Alan j babu',
      role: 'Co-Founder',
      image: alan,
      bio: 'flutter developer'
    },
    {
      name: 'Kali Das',
      role: 'Co-Founder',
      image: kali,
      bio: 'java full stack developer'
    },
    {
      name: 'Adhil',
      role: 'Co-Founder',
      image: adhil,
      bio: 'java full stack developer'
    },
    {
      name: 'Ain Aina',
      role: 'Marketing',
      image: aina,
      bio: 'social media manager'
    },
    {
      name: 'Amjed Usman',
      role: 'Developer',
      image: amjed,
      bio: 'django developer'
    },
    {
      name: 'Anjali',
      role: 'Developer',
      image: anjali,
      bio: 'ML developer'
    },
    {
      name: 'Darshana Davies',
      role: 'Developer',
      image: darshana,
      bio: 'python full stack '
    },
    {
      name: 'Joyal Fracis',
      role: 'Developer',
      image: joyal,
      bio: 'React developer'
    },
    {
      name: 'Mehrin Firos',
      role: 'Developer',
      image: mehrin,
      bio: 'python developer'
    },
    {
      name: 'Ramees',
      role: 'Developer',
      image: ramees,
      bio: '.net and angular developer'
    },
  ]

  const values = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Mission-Driven',
      description: 'Every project aligns with our mission to create meaningful impact',
      color: 'from-[#FF6B35] to-[#FF8C42]'
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'User-Centric',
      description: 'Users first in every design and development decision',
      color: 'from-[#FB923C] to-[#FF6B35]'
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Innovation First',
      description: 'Constantly exploring new technologies and methodologies',
      color: 'from-[#FF8C42] to-[#FB923C]'
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Collaborative',
      description: 'Working closely with clients as partners, not vendors',
      color: 'from-[#FF6B35] to-[#FB923C]'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6" /> },
    { number: '30+', label: 'Happy Clients', icon: <Heart className="w-6 h-6" /> },
    { number: '5+', label: 'Products Built', icon: <Code2 className="w-6 h-6" /> },
    { number: '11', label: 'Team Members', icon: <Coffee className="w-6 h-6" /> },
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Story Section - Split Design */}
      <section className="pt-8 pb-24 bg-gray-50 border-b border-[#FF6B35]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-white to-gray-100 p-8 relative overflow-hidden border border-[#FF6B35]/30">
                <div className="absolute top-4 right-4 w-20 h-20 bg-[#FF6B35] rounded-full opacity-80"></div>
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#FB923C] rounded-3xl opacity-60 rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FF8C42] rounded-full opacity-40"></div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-black mb-2">2026</div>
                    <div className="text-black/80">Year Founded</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
                Four Friends, <span className="bg-gradient-to-r from-[#FF6B35] to-[#FB923C] bg-clip-text text-transparent">One Vision</span>
              </h2>
              <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                <p>
                  We are four friends who met in college with one vision — to build something of our own. With no shortcuts and limited resources, we stepped into the digital world to solve real problems.
                </p>
                <p>
                  The journey was tough, but those challenges shaped us into a team that delivers — on time, on budget, and beyond expectations.
                </p>
                <p>
                  Today, we're proud to work with amazing clients while building our own products. This dual approach keeps us sharp, innovative, and always learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#FF6B35]/30"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-black/80 text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">The Squad</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">
              Our Amazing Team
            </h2>
            <p className="text-xl text-black/70">The talented people making it happen</p>
          </div>

          <HoverEffect items={team} />
        </div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35] via-[#FB923C] to-[#FF6B35] relative overflow-hidden">
        {/* Animated Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 text-white/80">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-[#FF6B35]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Want to join our team?
          </h2>
          <p className="text-xl text-black/70 mb-8">
            We're always looking for talented people who share our passion for building great products.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FB923C] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Get In Touch</span>
            <Rocket className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
