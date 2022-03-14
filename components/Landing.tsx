import Link from 'next/link'
import links from '../data/links'
import RandomTagline from './RandomTagline'

export default function Landing() {

  return (
    <div className="flex h-96 sm:h-screen bg-black">
      <div className="flex items-center px-16 text-center md:px-12 lg:w-1/2 lg:text-left">
        <div className="">
          <h2 className="text-5xl font-bold text-gray-200 md:text-6xl">
            WIP
          </h2>
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link href="/releases/">
              <a className="rounded bg-gray-900 px-4 py-3 font-semibold text-gray-200 hover:bg-gray-800">
                View Releases
              </a>
            </Link>
            <a
              className="mx-4 rounded bg-awcy-red-400 px-4 py-3 font-semibold text-white hover:bg-gray-400"
              href={links.mainSite.join}
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block lg:w-4/6"
        style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div
          className="h-full object-cover"
          style={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            backgroundImage: 'url(/main.jpg)',
          }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  )
}
