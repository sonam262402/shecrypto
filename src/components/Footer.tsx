import { siteConfig } from '../content';

export function Footer() {
  return (
    <footer className="border-t border-charcoal/8 bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>
          Prepared by <span className="text-white font-medium">{siteConfig.firstName}</span> for{' '}
          <span className="text-white font-medium">{siteConfig.company}</span>
        </p>
        <p className="text-white/50 text-center sm:text-right">
          Web3 Brand • Content • Podcasts • Community • Partnerships
        </p>
      </div>
    </footer>
  );
}
