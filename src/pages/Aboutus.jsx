import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
// Import your photos from the images folder
import ProfSunil from '../images/prof_sunil.png'; 
import SaurabhPhoto from '../images/saurabh.png';
import RishiPhoto from '../images/rishi.png';

function Aboutus() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const team = [
    {
      name: "Sunil Kumar Lohar",
      role: "Assistant Professor of Art and Aesthetics",
      org: "School of Liberal Arts, IIT Jodhpur",
      bio: "Dr. Lohar earned his PhD from IIIT Hyderabad and has over 15 years of interdisciplinary experience at the intersection of art, design, and community-based research. His work focuses on Indigenous knowledge systems and developing sustainable solutions for artisan communities across India. His scholarly interests include Indian folk aesthetics, visual grammar, and the media empowerment of traditional artists.",
      email: "sunillohar@iitj.ac.in",
      phone: "0291 280 1424",
      linkedin: "https://in.linkedin.com/in/sunil-lohar-phd-1358a21b",
      image: ProfSunil,
      isFaculty: true
    },
    {
      name: "Saurabh Chavan",
      role: "B.Tech, Electrical Engineering",
      org: "IIT Jodhpur, Class of 2026",
      bio: "Technical Team Member specializing in the development and architectural implementation of the Pabuji Folktale digital platform.",
      email: "b22ee061@iitj.ac.in",
      image: SaurabhPhoto,
      isFaculty: false
    },
    {
      name: "Bontha Rishi Samwarthik",
      role: "B.Tech, Electrical Engineering",
      org: "IIT Jodhpur, Class of 2026",
      bio: "Technical Team Member focused on AI integration and frontend user experience for the Pabuji interactive project.",
      email: "b22ai014@iitj.ac.in",
      image: RishiPhoto,
      isFaculty: false
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-5xl mx-auto">
            
            {/* Title */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl text-gray-800 dark:text-gray-100 font-bold mb-4">
                Meet the Team
              </h1>
              <div className="h-1 w-20 bg-indigo-500 mx-auto rounded"></div>
            </div>

            {/* Team Cards */}
            <div className="flex flex-col gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-md"
                >
                  
                  {/* Photo */}
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-between">
                    
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {member.name}
                        </h2>
                        {member.isFaculty && (
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
                            Faculty
                          </span>
                        )}
                      </div>

                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                        {member.org}
                      </p>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact Bar */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                      
                      {/* Email */}
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
                      >
                        <Mail size={18} />
                        <span>{member.email}</span>
                      </a>

                      {/* Phone */}
                      {member.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Phone size={18} />
                          <span>{member.phone}</span>
                        </div>
                      )}

                      {/* LinkedIn */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <FaLinkedin  size={18} />
                          <span>LinkedIn Profile</span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Aboutus;