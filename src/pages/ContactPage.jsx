import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, ArrowRight, Linkedin, Twitter, Instagram, Github, ChevronDown } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'hello@devople.studio',
      link: 'mailto:hello@devople.studio',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
      color: 'from-orange-400 to-amber-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'India (Remote-First)',
      link: '#',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#',
      color: 'from-orange-500 to-amber-600'
    }
  ]

  const socials = [
    { icon: <Twitter className="w-5 h-5" />, link: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, link: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, link: '#', label: 'Instagram' },
    { icon: <Github className="w-5 h-5" />, link: '#', label: 'GitHub' }
  ]

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while a full mobile app might take 2-4 months. We\'ll provide a detailed timeline after understanding your requirements.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes! We offer maintenance packages that include bug fixes, updates, and minor feature additions. We believe in building long-term relationships with our clients.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We use Slack/Discord for daily communication, weekly video calls for progress updates, and project management tools like Notion or Trello for task tracking.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer both fixed-price projects and hourly rates depending on the project scope. For well-defined projects, we prefer fixed pricing for transparency.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We often collaborate with in-house teams, providing additional expertise or handling specific parts of a project while integrating seamlessly with your workflow.'
    }
  ]

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ]

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Main Contact Section */}
      <section className="pt-8 pb-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Form */}
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contact Form</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none bg-slate-800 text-white placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none bg-slate-800 text-white placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none bg-slate-800 text-white placeholder-slate-400"
                        placeholder="Mobile App Development"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none bg-slate-800 text-white appearance-none"
                      >
                        <option value="">Select budget</option>
                        {budgetOptions.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none resize-none bg-slate-800 text-white placeholder-slate-400"
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Side - Visual & Social */}
            <div className="space-y-8">
              {/* Visual Card */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-8 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 rounded-xl rotate-12"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-white/70 mb-6">
                    Whether you have a detailed project brief or just a rough idea, we're here to help shape it into reality.
                  </p>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Average response time: 2-4 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
                <p className="text-slate-300 mb-6">
                  Follow us on social media for updates, insights, and behind-the-scenes content.
                </p>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group relative bg-slate-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} text-white rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">{info.title}</div>
                    <div className="font-semibold text-white">{info.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl font-bold text-white mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-600 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'pb-5 max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-500/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-orange-500/20 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's turn your vision into reality. Drop us a message and let's get started.
          </p>
          <a
            href="mailto:hello@devople.studio"
            className="inline-flex items-center px-10 py-5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <Mail className="mr-2 w-5 h-5" />
            hello@devople.studio
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
