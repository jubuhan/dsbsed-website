import { Target, Heart, Zap, Users } from 'lucide-react'
import jubuhan from '../assets/founders/jubuhan.png'
import alan from '../assets/founders/alan.png'
import kali from '../assets/founders/kali.png'
import adhil from '../assets/founders/adhil.png'

const AboutPage = () => {
  const team = [
    {
      name: 'Jubuhan',
      role: 'Co-Founder',
      image: jubuhan,
      bio: '[Brief bio or expertise]'
    },
    {
      name: 'Alan',
      role: 'Co-Founder',
      image: alan,
      bio: '[Brief bio or expertise]'
    },
    {
      name: 'Kali',
      role: 'Co-Founder',
      image: kali,
      bio: '[Brief bio or expertise]'
    },
    {
      name: 'Adhil',
      role: 'Co-Founder',
      image: adhil,
      bio: '[Brief bio or expertise]'
    }
  ]

  const timeline = [
    {
      year: '[YEAR 1]',
      title: 'The Beginning',
      description: 'Started as a small team with a big dream to build innovative digital products'
    },
    {
      year: '[YEAR 2]',
      title: 'First Major Client',
      description: 'Delivered our first enterprise-level project and expanded the team'
    },
    {
      year: '[YEAR 3]',
      title: 'Product Launch',
      description: 'Launched our first internal product that reached [X]K+ users'
    },
    {
      year: '[YEAR 4]',
      title: 'Studio Expansion',
      description: 'Grew to a team of [X]+ talented developers and designers'
    },
    {
      year: '[CURRENT YEAR]',
      title: 'Innovation Hub',
      description: 'Established as a leading tech studio building both client and internal products'
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'Every project we take on aligns with our mission to create meaningful impact'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'We put users first in every design and development decision'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly explore new technologies and methodologies'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative',
      description: 'We work closely with clients as partners, not just vendors'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We're a team of passionate builders creating digital products that matter
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p className="mb-4">
                [YOUR STARTUP NAME] was born from a simple idea: <strong>what if a tech studio could 
                build amazing products for clients while also creating its own innovative solutions?</strong>
              </p>
              <p className="mb-4">
                Founded in [YEAR], we started as a small team of developers and designers who were 
                passionate about building digital products that solve real problems. We weren't satisfied 
                with just doing client work — we wanted to innovate, experiment, and build our own products too.
              </p>
              <p>
                Today, we're proud to work with amazing clients while also developing our own suite of 
                products. This dual approach keeps us sharp, innovative, and always learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-slate-700 font-semibold max-w-4xl mx-auto leading-relaxed">
              "To build simple, powerful digital products that solve real problems — 
              for our clients and for the world."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="mb-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              Key milestones in our story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 md:max-w-md">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">[XX]+</div>
              <p className="text-blue-100">Projects Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">[XX]+</div>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">[X]+</div>
              <p className="text-blue-100">Internal Products</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">[X]+</div>
              <p className="text-blue-100">Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
