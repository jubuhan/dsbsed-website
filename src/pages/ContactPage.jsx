import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, ArrowRight, Linkedin, Instagram, ChevronDown } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create form data for submission
    const form = e.target
    const formData = new FormData(form)
    
    // Submit to FormSubmit.co
    fetch('https://formsubmit.co/jubuhantt5203@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Something went wrong. Please try again or email us directly.')
      }
    })
    .catch(error => {
      console.error('Error:', error)
      alert('Something went wrong. Please try again or email us directly.')
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'hello@devople.com',
      link: 'mailto:hello@devople.com',
      color: 'from-[#FF6B35] to-[#FF8C42]'
    }
  ]

  const socials = [
    { icon: <Linkedin className="w-5 h-5" />, link: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, link: '#', label: 'Instagram' },
    { icon: <Mail className="w-5 h-5" />, link: 'mailto:hello@devople.com', label: 'Email' }
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

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Main Contact Section */}
      <section className="pt-6 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Form */}
            <div>
              <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">Contact Form</span>
              <h2 className="text-4xl font-bold text-black mt-4 mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-black/80 mb-8">
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
                  {/* Hidden fields for FormSubmit configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission - Devople" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black/90 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#FF6B35]/30 focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all outline-none bg-white text-black placeholder-black/40"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black/90 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#FF6B35]/30 focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all outline-none bg-white text-black placeholder-black/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black/90 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#FF6B35]/30 focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all outline-none bg-white text-black placeholder-black/40"
                      placeholder="Mobile App Development"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black/90 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#FF6B35]/30 focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all outline-none resize-none bg-white text-black placeholder-black/40"
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FB923C] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-[#FF6B35]/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Side - Visual & Social */}
            <div className="space-y-8">
              {/* Email Us Card */}
              <div>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-[#FF6B35]/30 block"
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} text-white rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-black/70 mb-1">{info.title}</div>
                        <div className="font-semibold text-black">{info.value}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-8 border border-[#FF6B35]/30">
                <h3 className="text-xl font-bold text-black mb-4">Connect With Us</h3>
                <p className="text-black/80 mb-6">
                  Follow us on social media for updates, insights, and behind-the-scenes content.
                </p>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black/80 border border-[#FF6B35]/30 hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-[#FB923C] hover:text-white transition-all duration-300"
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

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#FF6B35]/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'pb-5 max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="text-black/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
