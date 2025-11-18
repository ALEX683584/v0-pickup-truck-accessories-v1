export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Site Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">TC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">TOBEKIN TONNEAU COVER</span>
                <span className="text-xs text-secondary-foreground/70">Premium Covers & Accessories</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-md">
            
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/70">Tonneau Covers</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} TOBEKIN TONNEAU COVER. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
