import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-bark py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            aria-label="Instagram"
            className="text-parchment/40 hover:text-parchment transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter / X"
            className="text-parchment/40 hover:text-parchment transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18.8 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
        </div>
        {/* Copyright */}
        <p className="text-xs text-parchment/30 font-sans tracking-wider">
          © 2026 Finca · <a href="#" className="hover:text-parchment/60 transition-colors">Privacy</a> · <a href="#" className="hover:text-parchment/60 transition-colors">Terms</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;