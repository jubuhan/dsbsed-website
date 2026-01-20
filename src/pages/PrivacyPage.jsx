import { Shield } from 'lucide-react'

const PrivacyPage = () => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Header */}
      <section className="pt-6 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FB923C] text-white rounded-2xl mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Privacy Policy
            </h1>
            <p className="text-black/70">
              Last updated: January 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                <p className="text-black/80 leading-relaxed">
                  At Devople, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Project details and requirements you share with us</li>
                  <li>Communication records when you contact us</li>
                  <li>Payment and billing information</li>
                  <li>Technical data about your device and browsing behavior</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Communicate with you about projects and updates</li>
                  <li>Process payments and transactions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Analyze usage patterns and improve user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
                <p className="text-black/80 leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80 mt-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors (lawyers, accountants)</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
                <p className="text-black/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
                <p className="text-black/80 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
                <p className="text-black/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p className="text-black/80 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-[#FF6B35]/30">
                  <p className="text-black/80">
                    <strong>Email:</strong> hello@devople.com<br />
                    <strong>Location:</strong> India (Remote-First)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
