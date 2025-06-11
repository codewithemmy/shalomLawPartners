export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Chris Okeke, SAN & Co.
            </h3>
            {/* <p className="text-pink-100">Affiliate of Shalom Law Partners</p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-pink-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white hover:text-pink-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-white hover:text-pink-300 transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Contact</h4>
            <address className="text-pink-100 not-italic leading-relaxed">
              <p>27/29 King George V Rd, Marina, Lagos.</p>
              <p>Phone: 0803 201 2944</p>
              <p>Email: chrisokekesan.org</p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-pink-200 mt-10 pt-6 text-center text-white text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-pink-200">Chris Okeke, SAN & Co.</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
