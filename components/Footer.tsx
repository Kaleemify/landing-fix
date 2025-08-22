import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-tasks text-white text-xl"></i>
              </div>
              <span className="ml-4 text-2xl font-bold">TaskEarn Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              The most trusted platform for earning money online through simple tasks and surveys.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Platform</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Task Categories
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Status Page
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Bug Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 lg:mb-0 text-lg">© 2025 TaskEarn Pro. All rights reserved.</div>
          <div className="flex items-center space-x-8 text-gray-400">
            <span className="flex items-center text-lg">
              <i className="fas fa-shield-alt mr-3 text-green-400 text-xl"></i>
              SSL Secured
            </span>
            <span className="flex items-center text-lg">
              <i className="fas fa-award mr-3 text-blue-400 text-xl"></i>
              SOC 2 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
