import Image from 'next/image'
import Link from 'next/link'

export default function Leadership() {
  const leaders = [
    {
      name: "Sam Waller",
      role: "President",
      image: "/images/sam-waller.jpeg",
      affiliation: "Alumni, University of Michigan",
      publication: "Every Three Weekly, Former Editor-in-Chief"
    },
    {
      name: "Emma Quarequio",
      role: "Vice President, Board Member",
      image: "/images/emma-quarequio.jpeg",
      affiliation: "Alumni, Boston University",
      publication: "The Bunion/Pinky Toe, Former Editor-in-Chief"
    },
    {
      name: "Henry Levenberg",
      role: "Treasurer, Board Member",
      image: "/images/henry-levenberg.jpeg",
      affiliation: "Alumni, The Ohio State University",
      publication: "The Sundial, Former Editor-in-Chief"
    },
    {
      name: "Carl Yaeger",
      role: "Director of Development, Board Member",
      image: "/images/carl-yaeger.jpeg",
      affiliation: "Alumni, Drake University",
      publication: "DUIN, Former Editor-in-Chief"
    },
    {
      name: "Idris Malik",
      role: "Secretary, Board Member",
      image: "/images/idris-malik.jpeg",
      affiliation: "Alumni, The Ohio State University",
      publication: "The Sundial, Former Editor-in-Chief"
    }
  ]

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-6">Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-4">
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
                <p className="text-gray-600">{leader.affiliation}</p>
                <p className="text-gray-600">{leader.publication}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8 text-sm text-gray-600">
            <p className="mb-4">
              College Satire Guild is a registered 501(c)(3) nonprofit organization (EIN: 88-3624801) based in Des Moines, Iowa. 
              Any contributions are tax-deductible to the extent permitted by the law.
            </p>
            <p className="mb-4">
              For any documentation requests, please reach out via email to{' '}
              <a href="mailto:info@satireguild.com" className="text-blue-600 hover:underline">
                info@satireguild.com
              </a>
              {' '}or via mail to 1508 46th St, Des Moines, IA 50311.
            </p>
            <p>
              For the website's privacy policy, please{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                click here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

