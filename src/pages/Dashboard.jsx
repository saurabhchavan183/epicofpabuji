import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                             
              </div>

            </div>

            {/* About Section */}
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            About Pabuji: The Folk Deity and His Living Epic
          </h1>

          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
            The tale of Pābūjī Rathore is not merely a story from the past; it is a vibrant, living tradition that breathes through the desert air of Rajasthan. Combining historical grit with divine mythology, the legend of Pabuji stands as a cornerstone of Rajasthani folk culture, celebrated for its themes of honor, protection, and sacrifice.
          </p>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-6">
            The Historical Hero
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Pabuji lived in the early 14th century, a time before the Rathore clan had established the mighty kingdom of Jodhpur. He was the son of Dhadhal Rathore and ruled over Kolū, then a modest desert outpost. While history remembers him as a "junior son" involved in local cattle raids and territorial skirmishes, folk memory has elevated him to a figure of monumental importance.

In the social hierarchy of his time, Pabuji was a protector of the marginalized. Today, he is primarily revered as the patron deity of the Rebari (camel-breeders) and is invoked to protect livestock from disease and to grant blessings to those in the rural heartlands.
          </p>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-6">
            The Phad: A Portable Temple
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Because many of Pabuji’s devotees are semi-nomadic, his worship has evolved to be as mobile as his people. Unlike traditional deities housed in permanent stone structures, Pabuji "visits" his followers through the Paṛ (or Phad).
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The Narrative Cloth: The Paṛ is a massive, intricate scroll painting—often 15 feet long—that serves as a portable temple.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The Visual Map: It does not follow a linear "comic-strip" timeline; instead, it functions like a geographical map where different regions of the painting represent different locations in Pabuji’s world.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The Iconography: Every inch of the cloth is filled with complex imagery detailing Pabuji’s life, his court, and his ultimate battle against his brother-in-law, Jindrāv Khī̃cī.</p>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-6">
            The Performance: An All-Night Vigil
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The epic is brought to life by Bhopas—itinerant singer-priests who perform the liturgy of Pabuji. These performances are deeply ritualistic and traditionally take place only at night, concluding at dawn
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The Musical Tradition: Accompanied by the haunting notes of the Ravanahatha (a primitive fiddle), the Bhopa sings the epic verses while his wife, the Bhopi, illuminates specific scenes on the Paṛ with a lamp.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Sacred Storytelling: The performance is more than entertainment; it is an act of communal worship. Through the Bhopa’s voice, the hero-god is invoked to present himself before the gathered devotees.
          </p>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-6">
            A Legacy Beyond Borders
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            While his roots remain firmly planted in the sands of Kolu, Pabuji’s influence stretches far beyond Rajasthan. His cult is found in Sindh, Gujarat (Kacch and Saurashtra), and Punjab, proving that the themes of his epic—the protection of the weak and the keeping of one's word—resonate across the borders of language and geography.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            "Pabuji is not just a figure of the past; he is a present power, a protector of the herd, and the soul of the Rajasthani desert."
          </p>

          </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;