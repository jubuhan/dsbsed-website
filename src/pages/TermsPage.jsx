import { FileText } from 'lucide-react'

const TermsPage = () => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Header */}
      <section className="pt-6 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FB923C] text-white rounded-2xl mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Terms of Service
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
                <h2 className="text-2xl font-bold text-black mb-4">Agreement to Terms</h2>
                <p className="text-black/80 leading-relaxed">
                  By accessing and using Devople's services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Services Provided</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  Devople provides digital services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>Mobile application development</li>
                  <li>Web development and design</li>
                  <li>UI/UX design services</li>
                  <li>Product development and consulting</li>
                  <li>Backend development</li>
                  <li>Cloud infrastructure and DevOps services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Project Engagement</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  When you engage our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>We will provide a detailed project proposal and timeline</li>
                  <li>Payment terms will be outlined in the project agreement</li>
                  <li>You grant us necessary access to resources required for project completion</li>
                  <li>Both parties agree to maintain professional communication</li>
                  <li>Changes to project scope may affect timeline and cost</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Intellectual Property</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  Upon full payment:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>You own the final deliverables created specifically for your project</li>
                  <li>We retain rights to reusable code, frameworks, and tools</li>
                  <li>We may showcase your project in our portfolio (with your permission)</li>
                  <li>Third-party licenses remain subject to their original terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Payment Terms</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  Our standard payment structure:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>Project deposits are non-refundable</li>
                  <li>Payment milestones will be defined in the project agreement</li>
                  <li>Late payments may result in project suspension</li>
                  <li>All prices are in the currency specified in the agreement</li>
                  <li>Additional work outside scope will be billed separately</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Warranties and Disclaimers</h2>
                <p className="text-black/80 leading-relaxed">
                  We provide services "as is" and make no warranties regarding uninterrupted or error-free service. We warrant that our work will be performed professionally and in accordance with industry standards. However, we do not guarantee specific business results or outcomes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
                <p className="text-black/80 leading-relaxed">
                  Our liability is limited to the amount paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from the use of our services or deliverables.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Confidentiality</h2>
                <p className="text-black/80 leading-relaxed">
                  We respect the confidentiality of your business information and will not disclose it to third parties without your consent, except as required by law or as necessary to complete the project.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Support and Maintenance</h2>
                <p className="text-black/80 leading-relaxed">
                  Post-launch support terms will be defined separately. We offer various maintenance packages to keep your product running smoothly. Bug fixes for issues within the agreed warranty period are provided at no additional cost.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Termination</h2>
                <p className="text-black/80 leading-relaxed mb-4">
                  Either party may terminate the agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black/80">
                  <li>With written notice as specified in the project agreement</li>
                  <li>Immediately if the other party breaches these terms</li>
                  <li>Upon completion of the project deliverables</li>
                </ul>
                <p className="text-black/80 leading-relaxed mt-4">
                  Upon termination, you are responsible for payment of all work completed up to that point.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Changes to Terms</h2>
                <p className="text-black/80 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
                <p className="text-black/80 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved through mutual discussion or, if necessary, through appropriate legal channels.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
                <p className="text-black/80 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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

export default TermsPage
