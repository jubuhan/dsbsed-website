import { useState } from 'react'
import { Mail, MessageSquare, MapPin, Clock, Send, Linkedin, Instagram, Github } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // [TODO: Add your form submission logic here]
    // For now, this is just a placeholder
    console.log('Form submitted:', formData)
    
    setTimeout(() => {
      alert('Thank you! We will get back to you soon.')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', projectType: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: '[YOUR_EMAIL@example.com]',
      link: 'mailto:[YOUR_EMAIL@example.com]'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '[+XX XXX XXX XXXX]',
      link: '[WHATSAPP_LINK]'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: '[City, Country]',
      link: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within a few hours',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      link: '[LINKEDIN_URL]',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      link: '[INSTAGRAM_URL]',
      color: 'hover:bg-pink-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      link: '[GITHUB_URL]',
      color: 'hover:bg-slate-800'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Talk
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within a few hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a project type</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="website">Website Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-slate-600">
                  Prefer to reach out directly? Use any of the methods below.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      {item.link !== '#' ? (
                        <a
                          href={item.link}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:scale-110`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time Notice */}
              <div className="mt-12 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
                <p className="text-green-800 font-semibold mb-1">
                  Quick Response Guaranteed
                </p>
                <p className="text-green-700 text-sm">
                  We usually reply within a few hours during business days. For urgent matters, please use WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-slate-600">
              Quick answers to questions you might have
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-slate-600">
                [Project timelines vary based on scope. A simple website typically takes 2-4 weeks, while a complex mobile app might take 2-3 months.]
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What's your pricing structure?
              </h3>
              <p className="text-slate-600">
                [We offer both fixed-price and hourly arrangements depending on project requirements. Contact us for a detailed quote.]
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Do you offer maintenance and support?
              </h3>
              <p className="text-slate-600">
                [Yes! We provide ongoing maintenance, updates, and technical support for all projects we deliver.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
