export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            The purpose of the College Satire Guild is to foster creative expression, critical thinking, and 
            community engagement through satirical journalism. We collaborate with various college 
            organizations to produce and distribute satirical publications, enhancing students' educational 
            experiences and civic awareness.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Successfully published nine independent, national issues</li>
            <li>Directly involved over twenty college-aged staff members in editorial, writing, and 
            production processes</li>
            <li>Connected over thirteen college satire organizations, resulting in over half a dozen 
            collaborative publications</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="mb-4">
            Through our own experience in satirical writing, we know that this offers students a unique 
            opportunity to not only develop their own writing and research skills, but offer a unique 
            political and cultural commentary not only on local but national issues as well. This encourages 
            organization members to improve their own critical thinking skills, engaging in meaningful 
            discussions about important issues.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Group Membership</h2>
          <p className="mb-4">
            The College Satire Guild welcomes membership applications from college satire organizations. 
            By joining our guild, your organization can:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Connect with other college satire publications across the country</li>
            <li>Share resources and best practices for satirical journalism</li>
            <li>Participate in collaborative projects and events</li>
            <li>Gain exposure to a wider audience through our network</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            For more information about the College Satire Guild or to get involved, please contact us at{' '}
            <a href="mailto:info@satireguild.com" className="text-blue-600 hover:underline">
              info@satireguild.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

