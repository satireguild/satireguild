export default function Members() {
  return (
    <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="rounded-lg border-4 border-dashed border-gray-200 bg-white p-6">
          <h1 className="mb-6 text-2xl font-bold">For Members</h1>
          
          <p className="mb-4">
            Students involved in our member organization have access to a variety of different resources within the Satire Guild. These include:
          </p>

          <ul className="mb-8 list-disc space-y-4 pl-5">
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

