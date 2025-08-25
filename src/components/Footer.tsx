import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Footer: React.FC = () => {
  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Sham Sundar A</h3>
            <p className="text-gray-400 text-sm">
              📍 {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              <a href="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                Home
              </a>
              <a href="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                About
              </a>
              <a href="/projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                Projects
              </a>
              <a href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Sham Sundar A</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;