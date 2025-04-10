'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '@/app/config/routes'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ShoppingBagIcon,
  UserIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="bg-white">
      <nav aria-label="Store Navigation" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link 
            href={routes.home} 
            className={`-m-1.5 p-1.5 transition-colors duration-200 hover:text-gray-800 ${isActive(routes.home) ? 'text-dark-900' : 'text-gray-600'}`}
          >
            <span className="sr-only">ShopVerse</span>
            <span className="text-2xl font-bold">ShopVerse</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-dark-900"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
       
          <Link 
            href={routes.categories} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.categories) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            Categories
          </Link>
          <Link 
            href={routes.products.all} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.products.all) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
             Products
          </Link>
          <Link 
            href={routes.shop.sale} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.shop.sale) ? 'text-dark-600' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            Sale
          </Link>
          <Link 
            href={routes.pages.about} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.pages.about) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            About Us
          </Link>
          <Link 
            href={routes.pages.contact} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.pages.contact) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link 
            href={routes.account.wishlist} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.account.wishlist) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            <HeartIcon className="h-6 w-6" />
          </Link>
          <Link 
            href={routes.account.orders} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.account.orders) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </Link>
          <Link 
            href={routes.account.login} 
            className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
              isActive(routes.account.login) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
            }`}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link 
              href={routes.home} 
              className={`-m-1.5 p-1.5 transition-colors duration-200 hover:text-gray-800 ${
                isActive(routes.home) ? 'text-dark-900' : 'text-gray-600'
              }`}
            >
              <span className="sr-only">ShopVerse</span>
              <span className="text-2xl font-bold">ShopVerse</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-dark-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
             
                <Link
                  href={routes.categories}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-gray-100 ${
                    isActive(routes.categories) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  href={routes.products.all}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-gray-100 ${
                    isActive(routes.products.all) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href={routes.shop.sale}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-gray-100 ${
                    isActive(routes.shop.sale) ? 'text-red-600' : 'text-gray-600 hover:text-dark-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sale
                </Link>
                <Link
                  href={routes.pages.about}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-gray-100 ${
                    isActive(routes.pages.about) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href={routes.pages.contact}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-gray-100 ${
                    isActive(routes.pages.contact) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <div className="flex items-center justify-between">
                  <Link 
                    href={routes.account.wishlist} 
                    className={`text-base font-semibold leading-7 transition-colors duration-200 ${
                      isActive(routes.account.wishlist) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                    }`}
                  >
                    <HeartIcon className="h-6 w-6" />
                  </Link>
                  <Link 
                    href={routes.account.orders} 
                    className={`text-base font-semibold leading-7 transition-colors duration-200 ${
                      isActive(routes.account.orders) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                    }`}
                  >
                    <ShoppingBagIcon className="h-6 w-6" />
                  </Link>
                  <Link 
                    href={routes.account.login} 
                    className={`text-base font-semibold leading-7 transition-colors duration-200 ${
                      isActive(routes.account.login) ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                    }`}
                  >
                    <MagnifyingGlassIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar