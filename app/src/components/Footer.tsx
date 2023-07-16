import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="/" className="flex items-center mb-4 sm:mb-0">
                <span className="text-blue-900 self-center text-2xl font-semibold whitespace-nowrap">LitLinks</span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-blue-900 sm:mb-0">
                  <li>
                      <Link href="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                  </li>
                  <li>
                      <Link href="/getstarted" className="mr-4 hover:underline md:mr-6">Get started</Link>
                  </li>
                  <li>
                      <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
                  </li>
              </ul>
          </div>
          <hr className="my-6 border-blue-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-blue-900 sm:text-center">© 2023 <Link href="/" className="hover:underline">LitLinks™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}