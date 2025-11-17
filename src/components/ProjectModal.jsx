import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, X, Calendar, Users, Zap } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const projectImages = {
    1: 'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=2048x2048&w=is&k=20&c=YSjDgQRHhi-kPn3GpowGFLPB8jEJN8SFrp2rpBFUD58=',
    2: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
    3: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    4:'Image.png',
    5: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop',
    6:'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    7: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
    8:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
  };


  

 const projectDetails = {
  1: {
    duration: "3 weeks",
    team: "Solo Project",
    highlights: [
      "Real-time stock chart simulation using Chart.js",
      "Zerodha-style trading dashboard UI",
      "Watchlist with add/remove functionality",
      "Portfolio panel with profit/loss calculations",
      "Highly responsive professional layout",
      "Smooth transitions and micro-interactions"
    ],
    challenges:
      "Providing smooth chart updates with simulated real-time data and building a clean Zerodha-inspired UI from scratch.",
    learnings:
      "Deepened knowledge of data visualization, React optimization, chart integrations, and scalable dashboard architecture."
  },

  2: {
    duration: "2 months",
    team: "Solo Project",
    highlights: [
      "Accommodation listing platform inspired by Airbnb UI",
      "Fully responsive grid layout for villas & stays",
      "Category-based filtering (Trending, Rooms, Cities, Mountains, Castles, Pools)",
      "Advanced search bar with live destination lookup",
      "Dynamic pricing display on listing cards",
      "Modern card-based UI with high-quality images",
      "Filter drawer with detailed options",
      "Smooth navigation and clean user experience",
      "Footer with brand identity and page links"
    ],
    challenges:
      "Building a visually rich, fully responsive layout with dynamic filters and search functionality while keeping the UI clean and modern.",
    learnings:
      "Mastered component reuse, dynamic filtering logic, scalable folder structure, and building pixel-perfect UI layouts."
  },

  3: {
    duration: "1 month",
    team: "Solo Project",
    highlights: [
      "Real-time weather data using OpenWeather API",
      "Dynamic temperature, humidity, wind & condition updates",
      "Location-based weather detection with Geolocation API",
      "Animated and responsive interface",
      "City-based weather search",
      "Dynamic weather backgrounds and icons"
    ],
    challenges:
      "Handling inconsistent API responses, loading states, and building weather-based dynamic UI layouts.",
    learnings:
      "Mastered API integration, state management in React, async handling, and creating dynamic UI components."
  },

  4: {
    duration: "1.5 months",
    team: "Solo Project",
    highlights: [
      "Google OAuth + manual login/signup",
      "Unsplash API integration for real-time image search",
      "Users can save and manage favorite photos",
      "Responsive modern pink-themed UI",
      "Trending tags with instant click search",
      "Backend sessions & cookies fully functional on Render"
    ],
    challenges:
      "Handling Google OAuth redirect URLs, backend deployment, session cookies, and CORS issues in production.",
    learnings:
      "Gained expertise in authentication flows, secure session handling, full-stack deployment, and API-heavy UI building."
  },

  5: {
    duration: "2 months",
    team: "Solo Project",
    highlights: [
      "Music Player UI",
      "Responsive layout",
      "Interactive playback controls",
      "Modern and clean design",
      "Cross-browser compatibility"
    ],
    challenges:
      "Building a pixel-perfect UI that closely matches Spotify’s design while keeping the layout fully responsive.",
    learnings: "Improved CSS mastery and advanced layout techniques."
  },

  6: {
    duration: "2.5 months",
    team: "Solo Project",
    highlights: [
      "Q&A Platform",
      "User Posts & Comments",
      "Custom Routing System",
      "Form Handling",
      "Backend API Logic"
    ],
    challenges:
      "Developing a scalable backend architecture to handle user-generated content efficiently.",
    learnings:
      "Mastered React Router, backend API creation, and full CRUD operations."
  },

  7: {
    duration: "2 weeks",
    team: "Solo Project",
    highlights: [
      "Advanced CSS animations",
      "Modern UI layout",
      "Creative and interactive design",
      "Fully responsive",
      "Showcase-level project"
    ],
    challenges:
      "Implementing complex CSS animations step-by-step and ensuring compatibility across devices.",
    learnings:
      "Polished skills in Flexbox, Grid, keyframe animation, and modern layout patterns."
  },

  8: {
    duration: "1 month",
    team: "Solo Project",
    highlights: [
      "Collection of multiple small projects",
      "Practiced various frontend technologies",
      "UI components & reusable patterns",
      "Logic-building exercises",
      "Clean folder structure"
    ],
    challenges:
      "Organizing multiple independent projects while keeping the structure maintainable.",
    learnings:
      "Improved project management, structuring, and modular code development."
  }
};


  const details = projectDetails[project.id] || projectDetails[1];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white rounded-3xl border-0">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-lg"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-80 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
          <img 
            src={projectImages[project.id] || projectImages[1]} 
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-blue-100 text-lg font-medium">
              {project.description}
            </p>
          </div>
        </div>

        <div className="p-8">
          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">Duration</span>
                  </div>
                  <p className="text-gray-800 font-bold">{details.duration}</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-600">Team</span>
                  </div>
                  <p className="text-gray-800 font-bold">{details.team}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => {
                    const colors = [
                      'bg-blue-100 text-blue-700 border-blue-200',
                      'bg-indigo-100 text-indigo-700 border-indigo-200',
                      'bg-purple-100 text-purple-700 border-purple-200',
                      'bg-pink-100 text-pink-700 border-pink-200',
                      'bg-violet-100 text-violet-700 border-violet-200'
                    ];
                    return (
                      <Badge 
                        key={tech}
                        className={`${colors[index % colors.length]} border font-semibold px-3 py-1`}
                      >
                        {tech}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {details.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Challenges Overcome</h4>
              <p className="text-gray-700 leading-relaxed">{details.challenges}</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Key Learnings</h4>
              <p className="text-gray-700 leading-relaxed">{details.learnings}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </Button>
            
            {project.live && (
              <Button 
                className="flex-1 border-2 border-indigo-500 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:border-transparent font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(project.live, '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
