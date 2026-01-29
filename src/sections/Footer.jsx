import React from "react";
import { FaPaw } from "react-icons/fa";

/**
 * Footer navigation configuration
 * (single source of truth)
 */
const FOOTER_NAV = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "About Us", href: "#about" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Forums", href: "#forums" },
      { label: "Events", href: "#events" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <FaPaw className="text-amber-400 text-2xl" />
              <span className="text-2xl font-bold">Pawsitive</span>
            </div>

            <p className="text-gray-400">
              Making pet care simpler, happier, and more connected.
            </p>
          </div>

          {/* Footer Navigation */}
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_NAV.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-4">
                  {section.title}
                </h4>

                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-amber-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © 2024 Pawsitive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
