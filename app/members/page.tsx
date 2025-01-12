import Image from 'next/image'

export default function Members() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
          <h1 className="text-2xl font-bold mb-6">For Members</h1>
          
          <p className="mb-4">
            Students involved in our member organization have access to a variety of different resources within the Satire Guild. These include:
          </p>

          <ul className="space-y-4 mb-8 list-disc pl-5">
            <li>New Leader Mentorship</li>
            <li>Guest Writing Opportunities</li>
            <li>National Leadership & Visibility</li>
          </ul>

          <p className="mb-4">
            If you're interested in learning more, please reach out to{' '}
            <a 
              href="mailto:info@satireguild.com" 
              className="text-blue-600 hover:underline"
            >
              info@satireguild.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

