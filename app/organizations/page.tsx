export default function Organizations() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-4">Why Join the College Satire Guild?</h2>
          <p className="mb-4">
            Joining the College Satire Guild offers numerous benefits for your organization:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Increased visibility within the college satire community</li>
            <li>Access to shared resources and best practices</li>
            <li>Opportunities for collaboration with other member organizations</li>
            <li>Support for growing and improving your publication</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Membership Requirements</h2>
          <p className="mb-4">
            To be eligible for membership, your organization should:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Be affiliated with a recognized college or university in the US</li>
            <li>Produce satirical content on a regular basis</li>
            <li>Adhere to ethical journalism practices</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
          <p className="mb-4">
            To apply for membership, please send an email to{' '}
            <a href="mailto:info@satireguild.com" className="text-blue-600 hover:underline">
              info@satireguild.com
            </a>
            . There is currently no annual fee to join!
          </p>
        </div>
      </div>
    </main>
  )
}

