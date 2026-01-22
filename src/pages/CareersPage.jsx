import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Join Our <span className="text-[#FF6B35]">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of something extraordinary. Build innovative solutions that transform businesses.
          </p>
        </motion.div>
      </div>

      {/* Current Status Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#FF6B35] to-[#FB923C] p-[2px] rounded-2xl shadow-lg"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FB923C] flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              No Open Positions Right Now
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Thank you for your interest in joining our team. We'll post new opportunities here when they become available.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CareersPage
