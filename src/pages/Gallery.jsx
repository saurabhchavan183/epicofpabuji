import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

// IMPORT YOUR LOCAL IMAGES HERE
// Assuming you have images like image.png in the Gallery folder
import image1 from '../Gallery/image1.png'; 
import image2 from '../Gallery/image2.png';
import image3 from '../Gallery/image3.png';
import image4 from '../Gallery/image4.png';
import image5 from '../Gallery/image5.png';
import image6 from '../Gallery/image6.png';
import image7 from '../Gallery/image7.png';
import image8 from '../Gallery/image8.png';
import image9 from '../Gallery/image9.png';
import image10 from '../Gallery/image10.png';
import image11 from '../Gallery/image11.png';
import image12 from '../Gallery/image12.png';
// Add more imports as you add more images to that folder
// import AnotherImage from '../Gallery/another-image.jpg';

function Gallery() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      title: "Pabuji ki Phad",
      description: "A traditional scroll painting depicting the life and adventures of Pabuji.",
      image: image1 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Layout",
      description: "Layout of major locations on the phad.",
      image: image2 // Use the imported variable name here
    },
    {
      id: 1,
      title: "John D Smith",
      description: "John Dargavel Smith (born August 26, 1946) is a former professor of sanskrit at Cambridge. His book ‘The Epic of Pabuji’, has helped the creators of this site a lot.",
      image: image3 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Pabuji ki Phad",
      description: "Pabuji ki Phad, Museum of Art and Photography(MAP), Bengaluru.",
      image: image4 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Pabuji ki Phad",
      description: "Phad of Pabuji Maharaj painting by Abhishek Joshi.",
      image: image5 // Use the imported variable name here
    },
    {
      id: 1,
      title: "The paṛ painter Śrīlāl Jośī at work",
      description: "Śrīlāl Jośī is one of the best-known living paṛ painters. These two pictures show him at work on a Pābūjī paṛ at his home in Bhīlwāṛā. He is applying green paint to the top left-hand corner of the cloth, where the image of the elephant-headed god Gaṇeśa can be seen. Yellow and flesh-colour have already been filled in. The painters apply colours one at a time to the entire cloth, starting with the lightest; the black outline round each figure is added last.",
      image: image12 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Heroic Epics",
      description: "A panoramic view of the Pabhuji Ki Phad displayed in the Wereldmuseum, Amsterdam, Netherlands.",
      image: image6 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Pabuji ki Phad",
      description: "Pabuji ki Phad by Bhavana Saxena.",
      image: image7 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Pabuji ki Phad",
      description: "Pabhuji in Pabuji ki Phad, a Phad painting at National Museum, New Delhi.",
      image: image8 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Pabuji ka herostone",
      description: "A herostone for Pabuji riding his mare Kalmi or Kesar in Koli temple, Kolis of Rajasthan, c. 17th century, yellow sandstone. Photograph by J. Kamphorst.",
      image: image9 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Pābūjī paṛ by Jaṛāvcand Josī of Bhīlwāṛā",
      description: "This very fine paṛ is dated 1938 A.D. and is the property of the Royal Tropical Institute, Tropenmuseum, Amsterdam, to whom I am grateful for permission to display it here. The right-hand edge has been damaged by wear: Ernst van de Wetering has supplied an indication of the content of the missing fragment.",
      image: image10 // Use the imported variable name here
    },
    {
      id: 1,
      title: "Parbū dances as he sings the epic story",
      description: "Parbū Bhopo singing, playing the rāvaṇhattho fiddle and dancing as he performs the epic in front of his paṛ. Parbū is the bard from whom the version of the epic transcribed and translated in The epic of Pābūjī was recorded.",
      image: image11 // Use the imported variable name here
    },
    
    // Add more items here as you import them
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                Cultural Gallery
              </h1>
            </div>

            {/* Change the grid container to only have 1 column and center it */}
                <div className="columns-1 md:columns-2 gap-8 max-w-7xl mx-auto space-y-8">
                {galleryItems.map((item) => (
                    <div key={item.id} className="break-inside-avoid bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                        
                        {/* 1. Removed fixed aspect ratio classes from this div */}
                        <div className="overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            /* 2. Changed h-full to h-auto and removed object-cover */
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        </div>
                        
                        <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                            {item.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
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

export default Gallery;