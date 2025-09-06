import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-amber-50 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
              <span className="text-xl font-bold text-amber-800">
                Argan Gold
              </span>
            </div>
            <p className="text-amber-700 mb-4 max-w-md">
              Premium authentic argan oil from Agadir Ait Melloul, Morocco. 
              Traditionally extracted, pure and organic, bringing you the finest 
              quality argan oil for beauty and culinary uses.
            </p>
            <div className="text-amber-600">
              <p className="mb-1">📍 Agadir Ait Melloul, Morocco</p>
              <p className="mb-1">📞 +212 XXX XXX XXX</p>
              <p>✉️ info@argangold.ma</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/benefits" 
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              Products
            </h3>
            <ul className="space-y-2 text-amber-600">
              <li>Cosmetic Argan Oil</li>
              <li>Culinary Argan Oil</li>
              <li>Pure Organic Oil</li>
              <li>Gift Sets</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-600 text-sm mb-4 md:mb-0">
              © 2024 Argan Gold. All rights reserved. Authentic Moroccan Argan Oil.
            </p>
            <div className="flex space-x-6 text-sm text-amber-600">
              <Link 
                href="/privacy" 
                className="hover:text-amber-800 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-amber-800 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;