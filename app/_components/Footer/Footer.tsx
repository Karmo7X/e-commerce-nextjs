import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { routes } from '@/app/config/routes';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuMjUgMzUuMjVoLTIuNXYtMi41aDIuNXYyLjV6bTAgMGgyLjV2Mi41aC0yLjV2LTIuNXoiIGZpbGw9IiMxMTExMTEiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white animate-gradient">
              ShopVerse
            </h3>
            <p className="text-gray-400">
              Your one-stop destination for all your shopping needs. Quality products at great prices.
            </p>
          </div>

          {/* Products & Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Products & Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={routes.products.all} className="text-gray-400 hover:text-blue-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href={routes.products.detail('featured')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href={routes.products.detail('new')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href={routes.shop.sale} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sale Items
                </Link>
              </li>
              <li>
                <Link href={routes.shop.deals} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Special Deals
                </Link>
              </li>
            </ul>
          </div>

       

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={routes.pages.about} className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={routes.pages.contact} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={routes.pages.shipping} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href={routes.pages.returns} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href={routes.pages.privacy} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={routes.pages.terms} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and exclusive offers!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} /> 
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()}  ShopVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
