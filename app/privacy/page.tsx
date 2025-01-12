export default function Privacy() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          
          <div className="space-y-4">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
            <p>
              The College Satire Guild collects information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Apply for membership</li>
              <li>Contact us via email</li>
              <li>Subscribe to our communications</li>
              <li>Make a donation</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Process your membership application</li>
              <li>Communicate with you about the Guild's activities</li>
              <li>Process donations and provide tax documentation</li>
              <li>Improve our services and website</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">3. Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h3 className="text-xl font-semibold mt-6">4. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:info@satireguild.com" className="text-blue-600 hover:underline">
                info@satireguild.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

