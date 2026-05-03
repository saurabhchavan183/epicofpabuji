import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { ExternalLink, Book, Globe, Video, Palette } from 'lucide-react';

function References() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const referenceLinks = [
    {
      category: "Primary Literature",
      icon: <Book className="text-amber-600" size={24} />,
      items: [
        { name: "The Epic of Pabuji by John D. Smith", description: "The definitive academic study and translation of the Pabuji oral epic.", url: "https://alchetron.com/John-D-Smith" },
      ]
    },
    {
      category: "Academic & Research Databases",
      icon: <Globe className="text-blue-600" size={24} />,
      items: [
        { name: "Bombay Indology", description: "Electronic texts and resources for Indian studies.", url: "https://bombay.indology.info/" },
        { name: "Wikipedia: Pabuji", description: "General overview and historical context of the folk deity.", url: "https://en.wikipedia.org/wiki/Pabuji" },
      ]
    },
    {
      category: "Art & Cultural Platforms",
      icon: <Palette className="text-rose-600" size={24} />,
      items: [
        { name: "StoryLTD", description: "Documentation of traditional Indian art forms and stories.", url: "https://www.storyltd.com/" },
        { name: "Mojarto", description: "Platform for exploring and collecting Indian folk and tribal art.", url: "https://www.mojarto.com/" },
      ]
    },
    {
      category: "Multimedia Resources",
      icon: <Video className="text-red-600" size={24} />,
      items: [
        { name: "YouTube", description: "Performances of Pabuji ki Phad and folk songs by Bhopa communities.", url: "https://www.youtube.com" },
      ]
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-5xl mx-auto">
            
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                References & Resources
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                A curated list of sources used to document the legend and visual history of Pabuji Rathore.
              </p>
            </div>

            <div className="space-y-6">
              {referenceLinks.map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
                    {section.icon}
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">{section.category}</h2>
                  </div>
                  <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">{item.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                          </div>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm font-medium whitespace-nowrap"
                          >
                            Visit Source <ExternalLink size={14} />
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default References;