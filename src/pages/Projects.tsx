import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  // Show only featured projects initially, then all when "Show More" is clicked
  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-dark-900 pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div 
          ref={headerRef}
          className={`container-max section-padding transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring full-stack applications, 
              UI/UX designs, and innovative solutions to real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-800/30">
        <div className="container-max section-padding">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter size={20} />
              <span className="font-medium">Filter by:</span>
            </div>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-primary-400 hover:bg-white/10'
              }`}
            >
              All
            </button>
            {allTechnologies.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-primary-400 hover:bg-white/10'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div 
          ref={projectsRef}
          className={`container-max section-padding transition-all duration-1000 ${
            projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group glass-effect rounded-xl overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-primary-500/20 text-primary-400 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium flex items-center space-x-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && filteredProjects.length > displayedProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="btn-secondary"
              >
                Show More Projects
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No projects found with the selected filter.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="btn-primary mt-4"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;