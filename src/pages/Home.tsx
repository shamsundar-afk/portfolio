import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };

  const typingTexts = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        <div 
          ref={heroRef}
          className={`container-max section-padding relative z-10 text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Greeting */}
            <p className="text-primary-400 text-lg font-medium animate-fade-in">
              👋 Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-slide-up">
              {personalInfo.name}
            </h1>

            {/* Typing Effect */}
            <div className="text-2xl md:text-3xl text-gray-300 font-medium h-12 flex items-center justify-center">
              <TypingEffect 
                texts={typingTexts}
                className="gradient-text"
              />
            </div>

            {/* Description */}
            <div className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: personalInfo.bio }}></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up">
              <Link to="/projects" className="btn-primary">
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a 
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 animate-fade-in">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 p-3 rounded-full hover:bg-white/5 hover:scale-110"
                    aria-label={link.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-2/2 transform -translate-x-2/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full p-1">
            <div className="w-1 h-3 bg-primary-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Professional Banner Section */}
      <section className="relative py-20 bg-gradient-to-r from-black via-dark-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
        </div>

        <div 
          ref={bannerRef}
          className={`container-max section-padding relative z-10 transition-all duration-1000 ${
            bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-400/20">
                  {/* Placeholder for professional image */}
                  <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-primary-500/20 rounded-full flex items-center justify-center">
                        <span className="text-6xl">👨‍💻</span>
                      </div>
                      <p className="text-primary-400 font-medium">Professional Photo</p>
                      <p className="text-gray-400 text-sm px-4">
                        Replace this placeholder with your professional headshot
                      </p>
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl group-hover:bg-primary-400/30 transition-colors duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-600/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-400/0 group-hover:border-primary-400/50 transition-all duration-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Crafting Digital Excellence with
                  <span className="block gradient-text mt-2">Passion & Precision</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I have over 5 years of experience in full-stack development and UI design. I enjoy turning complex ideas into simple, easy-to-use websites and applications. My goal is always to build clean, fast, and user-friendly solutions that work well for everyone.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 glass-effect rounded-lg hover:bg-primary-500/10 transition-colors duration-300">
                  <div className="text-2xl font-bold text-primary-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg hover:bg-primary-500/10 transition-colors duration-300">
                  <div className="text-2xl font-bold text-primary-400">5+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg hover:bg-primary-500/10 transition-colors duration-300">
                  <div className="text-2xl font-bold text-primary-400">89%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/about" className="btn-primary">
                  Learn More About Me
                </Link>
                <Link to="/projects" className="btn-secondary">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-dark-800/50">
        <div 
          ref={ctaRef}
          className={`container-max section-padding transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I specialize in creating digital experiences that are not only visually stunning 
              but also highly functional and user-friendly. Ready to bring your ideas to life?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;