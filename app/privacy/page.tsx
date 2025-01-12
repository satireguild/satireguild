export default function Privacy() {
  return (
    <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="rounded-lg border-4 border-dashed border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-semibold">Privacy Policy</h2>
          
          <div className="space-y-4">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="mt-6 text-xl font-semibold">1. Information We Collect</h3>
            <p>
              The College Satire Guild collects information that you provide directly to us when you:
            </p>
            <ul className="mb-4 list-disc pl-5">
              <li>Apply for membership</li>
              <li>Contact us via email</li>
              <li>Subscribe to our communications</li>
              <li>Make a donation</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul className="mb-4 list-disc pl-5">
              <li>Process your membership application</li>
              <li>Communicate with you about the Guild's activities</li>
              <li>Process donations and provide tax documentation</li>
              <li>Improve our services and website</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold">3. Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h3 className="mt-6 text-xl font-semibold">4. Contact Us</h3>
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

