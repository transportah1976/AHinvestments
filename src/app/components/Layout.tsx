import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const logo = 'https://images.unsplash.com/photo-1760786841098-06a0a1a5d661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BvcnQlMjBsb2dpc3RpY3MlMjBjb21wYW55JTIwbG9nb3xlbnwxfHx8fDE3NzMzNDk4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AH Investments",
      "description": "Kompleksowe rozwiązania transportowe i pakujące dla firm. Transport krajowy i międzynarodowy.",
      "url": "https://ahinvestments.pl",
      "logo": "https://ahinvestments.pl/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-885-222-277",
        "contactType": "customer service",
        "email": "hszymczak@ahinvestments.pl",
        "areaServed": ["PL", "EU", "CH", "GB"],
        "availableLanguage": ["Polish"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jana Pawła II 30 H",
        "addressLocality": "Swolszewice Duże",
        "postalCode": "97-320",
        "addressCountry": "PL"
      },
      "sameAs": []
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Floating Mobile Contact Buttons */}
      <div className="md:hidden fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <a
          href="tel:+48885222277"
          className="w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Zadzwoń"
        >
          <Phone size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="mailto:hszymczak@ahinvestments.pl"
          className="w-14 h-14 bg-gradient-to-br from-[#1B3A5F] to-[#2a4870] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Wyślij email"
        >
          <Mail size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Top Bar */}
      <div className="bg-[#1B3A5F] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a href="tel:+48885222277" className="flex items-center gap-2 hover:text-[#F5931D] transition-colors">
              <Phone size={14} />
              <span>+48 885 222 277</span>
            </a>
            <a href="mailto:hszymczak@ahinvestments.pl" className="flex items-center gap-2 hover:text-[#F5931D] transition-colors">
              <Mail size={14} />
              <span>hszymczak@ahinvestments.pl</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-lg bg-white/95' : 'border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center transition-transform hover:scale-105">
              <img src={logo} alt="AH Investments" className="h-18 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/"
                className={`px-5 py-2 rounded-lg transition-all transform hover:scale-105 ${
                  isActive('/') 
                    ? 'text-[#F5931D] bg-[#F5931D]/10' 
                    : 'text-[#1B3A5F] hover:bg-gray-50'
                }`}
              >
                Strona główna
              </Link>
              <Link
                to="/o-nas"
                className={`px-5 py-2 rounded-lg transition-all transform hover:scale-105 ${
                  isActive('/o-nas') 
                    ? 'text-[#F5931D] bg-[#F5931D]/10' 
                    : 'text-[#1B3A5F] hover:bg-gray-50'
                }`}
              >
                O nas
              </Link>
              <Link
                to="/materialy-opakowaniowe"
                className={`px-5 py-2 rounded-lg transition-all transform hover:scale-105 ${
                  isActive('/materialy-opakowaniowe') 
                    ? 'text-[#F5931D] bg-[#F5931D]/10' 
                    : 'text-[#1B3A5F] hover:bg-gray-50'
                }`}
              >
                Materiały opakowaniowe
              </Link>
              <Link
                to="/transport-miedzynarodowy"
                className={`px-5 py-2 rounded-lg transition-all transform hover:scale-105 ${
                  isActive('/transport-miedzynarodowy') 
                    ? 'text-[#F5931D] bg-[#F5931D]/10' 
                    : 'text-[#1B3A5F] hover:bg-gray-50'
                }`}
              >
                Transport międzynarodowy
              </Link>
              <Link
                to="/kontakt"
                className={`ml-2 px-8 py-3 rounded-full transition-all shadow-md hover:shadow-xl transform hover:scale-105 ${
                  isActive('/kontakt')
                    ? 'bg-[#F5931D] text-white'
                    : 'bg-[#1B3A5F] text-white hover:bg-[#F5931D]'
                }`}
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#1B3A5F] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isActive('/') 
                      ? 'text-[#F5931D] bg-[#F5931D]/10' 
                      : 'text-[#1B3A5F] hover:bg-gray-50'
                  }`}
                >
                  Strona główna
                </Link>
                <Link
                  to="/o-nas"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isActive('/o-nas') 
                      ? 'text-[#F5931D] bg-[#F5931D]/10' 
                      : 'text-[#1B3A5F] hover:bg-gray-50'
                  }`}
                >
                  O nas
                </Link>
                <Link
                  to="/materialy-opakowaniowe"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isActive('/materialy-opakowaniowe') 
                      ? 'text-[#F5931D] bg-[#F5931D]/10' 
                      : 'text-[#1B3A5F] hover:bg-gray-50'
                  }`}
                >
                  Materiały opakowaniowe
                </Link>
                <Link
                  to="/transport-miedzynarodowy"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isActive('/transport-miedzynarodowy') 
                      ? 'text-[#F5931D] bg-[#F5931D]/10' 
                      : 'text-[#1B3A5F] hover:bg-gray-50'
                  }`}
                >
                  Transport międzynarodowy
                </Link>
                <Link
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isActive('/kontakt') 
                      ? 'text-[#F5931D] bg-[#F5931D]/10' 
                      : 'text-[#1B3A5F] hover:bg-gray-50'
                  }`}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1B3A5F] via-[#243d5f] to-[#1B3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img src={logo} alt="AH Investments" className="h-20 mb-6" />
              <p className="text-white/80 mb-6 max-w-md">
                Kompleksowe rozwiązania transportowe i pakujące dla Twojego biznesu. 
                Od pakowania po transport – bezpieczeństwo Twojego towaru w jednych rękach.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Szybkie linki</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/80 hover:text-[#F5931D] transition-colors">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link to="/o-nas" className="text-white/80 hover:text-[#F5931D] transition-colors">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link to="/materialy-opakowaniowe" className="text-white/80 hover:text-[#F5931D] transition-colors">
                    Materiały opakowaniowe
                  </Link>
                </li>
                <li>
                  <Link to="/transport-miedzynarodowy" className="text-white/80 hover:text-[#F5931D] transition-colors">
                    Transport międzynarodowy
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-white/80 hover:text-[#F5931D] transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Kontakt</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <a href="tel:+48885222277" className="hover:text-[#F5931D] transition-colors">
                    +48 885 222 277
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <a href="mailto:hszymczak@ahinvestments.pl" className="hover:text-[#F5931D] transition-colors break-all">
                    hszymczak@ahinvestments.pl
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>
                    Jana Pawła II 30 H<br />
                    97-320 Swolszewice Duże
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-center text-white/60 text-sm">
              <p>© 2026 AH Investments. Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}