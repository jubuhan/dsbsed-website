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
import devadash from '../assets/team/devadash.png'
import viswajith from '../assets/team/viswajith.png'
import missionImg from '../assets/about/mission.jpg'
import userCentricImg from '../assets/about/user-centric.jpg'
import innovationImg from '../assets/about/innovation.jpg'
import collaborativeImg from '../assets/about/collaborative.jpg'

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
      name: 'Aina',
      role: 'Marketing',
      image: aina,
      bio: 'social media manager'
    },
    {
      name: 'Devadash',
      role: 'Developer',
      image: devadash,
      bio: 'MERN stack developer'
    },
    {
      name: 'Viswajith',
      role: 'Developer',
      image: viswajith,
      bio: 'MERN stack developer'
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
      color: 'from-[#FF6B35] to-[#FF8C42]',
      image: missionImg
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'User-Centric',
      description: 'Users first in every design and development decision',
      color: 'from-[#FB923C] to-[#FF6B35]',
      image: userCentricImg
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Innovation First',
      description: 'Constantly exploring new technologies and methodologies',
      color: 'from-[#FF8C42] to-[#FB923C]',
      image: innovationImg
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Collaborative',
      description: 'Working closely with clients as partners, not vendors',
      color: 'from-[#FF6B35] to-[#FB923C]',
      image: collaborativeImg
    }
  ]

  const stats = [
    { number: '10+', label: 'Products Built', icon: <Code2 className="w-6 h-6" /> },
    { number: '11', label: 'Team Members', icon: <Coffee className="w-6 h-6" /> },
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Story Section - Split Design */}
      <section className="pt-6 pb-12 bg-gray-50 relative">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">What We Believe In</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#FF6B35]/30"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${value.image})` }}
                />
                {/* Dark Overlay */}
                <div className={`absolute inset-0 bg-black/70 group-hover:bg-gradient-to-br group-hover:${value.color} group-hover:opacity-90 transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#FF6B35] transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/90 text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Grid */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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

      {/* Stats Section - Modern Centered Design */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-[#FF6B35]/20 hover:border-[#FF6B35] min-w-[280px]">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#FB923C]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FB923C] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FB923C] bg-clip-text text-transparent mb-3">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <p className="text-black/70 text-lg font-semibold">{stat.label}</p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#FF6B35]/10 to-[#FB923C]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
