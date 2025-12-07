import { Target, Heart, Zap, Users, Sparkles, Code2, Rocket, Coffee } from 'lucide-react'
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
  const founders = [
    {
      name: 'Jubuhan',
      role: 'Co-Founder',
      image: jubuhan,
      bio: 'full-stack app and web developer',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Alan j babu',
      role: 'Co-Founder',
      image: alan,
      bio: 'flutter developer',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Kali Das',
      role: 'Co-Founder',
      image: kali,
      bio: 'java full stack developer',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Adhil',
      role: 'Co-Founder',
      image: adhil,
      bio: 'java full stack developer',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const team = [
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
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'User-Centric',
      description: 'Users first in every design and development decision',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Innovation First',
      description: 'Constantly exploring new technologies and methodologies',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Collaborative',
      description: 'Working closely with clients as partners, not vendors',
      color: 'from-green-500 to-emerald-600'
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
      {/* Hero Section - Modern Glassmorphism */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/80 text-sm">Building the future, one product at a time</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            We Are <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Creators</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A passionate team of developers, designers, and dreamers building digital products that matter
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Split Design */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-blue-500 rounded-3xl opacity-60 rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full opacity-40"></div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-slate-800 mb-2">2024</div>
                    <div className="text-slate-600">Year Founded</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Born from a <span className="gradient-text">simple idea</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  What if a tech studio could build amazing products for clients while also creating its own innovative solutions?
                </p>
                <p>
                  We started as a small team of developers and designers passionate about building digital products that solve real problems. We weren't satisfied with just doing client work — we wanted to innovate, experiment, and build our own products too.
                </p>
                <p>
                  Today, we're proud to work with amazing clients while also developing our own suite of products. This dual approach keeps us sharp, innovative, and always learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section - Premium Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-slate-600">The visionaries who started it all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((member, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className={`relative h-72 bg-gradient-to-br ${member.color} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-45"></div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className={`text-transparent bg-gradient-to-r ${member.color} bg-clip-text font-semibold mb-2`}>{member.role}</p>
                    <p className="text-slate-500 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">The Squad</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Our Amazing Team
            </h2>
            <p className="text-xl text-slate-400">The talented people making it happen</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-800">
                        <span className="text-slate-500 text-sm">Coming Soon</span>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <p className="text-blue-400 text-sm font-medium">{member.role}</p>
                    <p className="text-slate-400 text-xs mt-1">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Want to join our team?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're always looking for talented people who share our passion for building great products.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
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
