import { useState } from 'react'
import { ExternalLink, Sparkles } from 'lucide-react'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: '[E-Commerce Platform Name]',
      category: 'Client Projects',
      description: 'Full-featured e-commerce platform with real-time inventory management and payment integration',
      tags: ['Live', 'Web', 'Mobile'],
      technologies: ['React', 'Django', 'Flutter'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Internal Product - Task Manager]',
      category: 'Our Products',
      description: 'AI-powered task management tool with smart scheduling and team collaboration features',
      tags: ['Beta', 'Web'],
      technologies: ['Next.js', 'AI/ML', 'PostgreSQL'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Healthcare Booking App]',
      category: 'Client Projects',
      description: 'Patient appointment booking system with doctor profiles and telemedicine support',
      tags: ['Live', 'Mobile'],
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Internal Product - Analytics Dashboard]',
      category: 'Our Products',
      description: 'Business intelligence dashboard with real-time data visualization and reporting',
      tags: ['Coming Soon', 'Web'],
      technologies: ['React', 'D3.js', 'Python'],
      image: '[PROJECT_IMAGE_URL]',
      link: '#'
    },
    {
      title: '[Restaurant Management System]',
      category: 'Client Projects',
      description: 'Complete restaurant POS system with inventory, orders, and customer management',
      tags: ['Live', 'Web', 'Mobile'],
      technologies: ['Vue.js', 'Laravel', 'React Native'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Corporate Website - Tech Company]',
      category: 'Client Projects',
      description: 'Modern corporate website with CMS, blog, and lead generation features',
      tags: ['Live', 'Web'],
      technologies: ['Next.js', 'Tailwind', 'Strapi'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Internal Product - Code Snippet Manager]',
      category: 'Our Products',
      description: 'Developer tool for organizing and sharing code snippets with syntax highlighting',
      tags: ['Beta', 'Web'],
      technologies: ['React', 'MongoDB', 'Express'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Fitness Tracking App]',
      category: 'Client Projects',
      description: 'Comprehensive fitness app with workout plans, nutrition tracking, and progress analytics',
      tags: ['Live', 'Mobile'],
      technologies: ['Flutter', 'Firebase', 'TensorFlow'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    },
    {
      title: '[Social Learning Platform]',
      category: 'Client Projects',
      description: 'Educational platform with video courses, quizzes, and peer-to-peer learning',
      tags: ['Live', 'Web'],
      technologies: ['Django', 'React', 'AWS'],
      image: '[PROJECT_IMAGE_URL]',
      link: '[PROJECT_URL]'
    }
  ]

  const filters = ['All', 'Client Projects', 'Our Products']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getTagColor = (tag) => {
    switch (tag) {
      case 'Live':
        return 'bg-green-100 text-green-700'
      case 'Beta':
        return 'bg-yellow-100 text-yellow-700'
      case 'Coming Soon':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            A showcase of client work and our own innovative products
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <span className="text-slate-400">[Project Mockup]</span>
                  {project.category === 'Our Products' && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Startup Lab
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Lab Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full mb-4">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-bold">Startup Lab</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Building Our Own Products
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beyond client work, we invest in creating our own digital products. 
              These projects help us stay innovative and test new technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">[X]+</div>
              <p className="text-slate-600">Internal Products</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">[X]K+</div>
              <p className="text-slate-600">Active Users</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">[X]+</div>
              <p className="text-slate-600">Technologies Tested</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
