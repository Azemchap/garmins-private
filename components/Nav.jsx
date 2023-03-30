
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = {
  pages: [
    { name: 'Wearables', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Sports & Fitness', href: '#' },
    { name: 'Automotive', href: '#' },
    { name: 'Electronics', href: '#' },
  ],
}


export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full fixed z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>


              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="/" className='text-gray-900 font-medium'>
                    <span className="sr-only">GARMIN ELECTRONICS</span>
                    GARMIN ELECTRONICS
                  </a>
                </div>
                <div className="border-t border-gray-200 pt-8 flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Wearables
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Electronics
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sports & Fitness
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Automotive
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Electronics
                  </a>
                </div>
              </div>


              <div className="border-t border-gray-200 mt-10 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create an account
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="max-w-screen-2xl mx-auto h-16 px-4 flex items-center gap-10 justify-between md:px-6 lg:px-8">
              <a href="/" className='text-white font-bold'>
                <span className="sr-only">GARMIN ELECTRONICS</span>
                GARMIN
              </a>

              {/* WHATSAPP INFO */}
              <a href='#' className=" flex gap-2 align-middle text-right text-sm font-medium text-white ">
                <Image src={'/Images/whatsapp.svg'} width={20} height={20} />
                +1(503) 377-6489
              </a>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a>
                <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:pl-0">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  {/* <div className="hidden lg:flex lg:items-center">
                    <a href="/" className='text-white'>
                      <span className="sr-only">Workflow</span>
                      GARMIN
                    </a>
                  </div> */}

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <Popover.Group className="ml-8">
                      <div className="h-full flex justify-center space-x-8 md:mx-0">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm uppercase font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    {/* <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a> */}
                  </div>

                  {/* Logo (lg-) */}
                  {/* <a href="/" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    GARMIN
                  </a> */}
                  <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        {/* <div className="hidden lg:flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Search</span>
                            <SearchIcon className="w-6 h-6" aria-hidden="true" />
                          </a>
                        </div> */}
                        <div className="flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Account</span>
                            <UserIcon className="w-6 h-6" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
                      <div className="flow-root">
                        <a href="#" className="group -m-2 p-2 flex items-center">
                          <ShoppingCartIcon
                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
