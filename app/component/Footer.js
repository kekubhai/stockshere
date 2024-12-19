export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">StocksHere</h3>
            <p>Your radical partner in stock trading since 1985.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#features" className="hover:text-gray-300">Features</a></li>
              <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 StocksHere. All Your Stocks Are Belong To Us!</p>
        </div>
      </div>
    </footer>
  )
}

