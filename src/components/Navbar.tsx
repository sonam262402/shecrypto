import { useEffect, useState } from 'react';
import { navLinks } from '../content';
import { Button } from './Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          className="font-display font-bold text-lg text-charcoal hover:text-deep-purple transition-colors"
        >
          SheCrypto Proposal
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-deep-purple transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#next-step" variant="primary" className="!px-5 !py-2.5 !text-sm">
            Let&apos;s Build SheCrypto
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-charcoal/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-purple"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-charcoal/5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-charcoal/80 font-medium hover:text-deep-purple"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button href="#next-step" variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
                Let&apos;s Build SheCrypto
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
