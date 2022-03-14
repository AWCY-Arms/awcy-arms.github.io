import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import navigation from '../data/navigation'
import Link from 'next/link'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface NavbarProps {
  current?: string
}

export default function NavBar(props: NavbarProps) {
  return (
    <Disclosure as="nav" className="bg-awcy-red-400">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/"><a><img
                    className="block lg:hidden h-12 w-auto"
                    src="/awcy_wordmark_hwite.svg"
                    alt="AWCY? Logo"
                  /></a></Link>
                  <Link href="/"><a><img
                    className="hidden lg:block h-14 w-auto"
                    src="/awcy_wordmark_hwite.svg"
                    alt="AWCY? Logo"
                  /></a></Link>
                </div>
                <div className="hidden sm:block ml-auto">
                  <div className="flex py-4 space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.id === props.current ? 'bg-gray-100 text-awcy-red-400' : 'text-gray-100 hover:bg-black hover:text-white ',
                          'px-3 py-2 rounded-md font-medium'
                        )}
                        aria-current={item.id == props.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.id === props.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.id == props.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}

    </Disclosure>
  )
}
