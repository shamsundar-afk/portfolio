import React from 'react';
import { Calendar, MapPin, Award, Code, Palette, Zap } from 'lucide-react';
import { personalInfo, skills, experience } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-dark-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div 
          ref={introRef}
          className={`container-max section-padding transition-all duration-1000 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                About <span className="gradient-text">Me</span>
              </h1>
              {/* <p className="text-xl text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p> */}

              <div className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: personalInfo.bio }}></div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={20} className="text-primary-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Calendar size={20} className="text-primary-400" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Award size={20} className="text-primary-400" />
                  <span>50+ Projects Completed</span>
                </div>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-2xl glass-effect flex items-center justify-center">
                  <div className="text-6xl text-primary-400">👨‍💻</div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-600/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div 
          ref={skillsRef}
          className={`container-max section-padding transition-all duration-1000 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => {
              const icons = [Code, Zap, Palette, Award];
              const IconComponent = icons[index % icons.length];
              
              return (
                <div 
                  key={skillCategory.category} 
                  className="glass-effect rounded-xl p-6 hover-lift group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors duration-300">
                      <IconComponent size={24} className="text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10 hover:border-primary-400/50 hover:text-primary-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-dark-800/30">
        <div 
          ref={experienceRef}
          className={`container-max section-padding transition-all duration-1000 ${
            experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My professional journey and key milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

              {experience.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8 mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900"></div>
                  </div>

                  {/* Content */}
                  <div className="glass-effect rounded-xl p-6 flex-1 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-primary-400 font-medium text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;