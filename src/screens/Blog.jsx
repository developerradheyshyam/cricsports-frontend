"use client"
import { ArrowRight } from 'lucide-react';
import React from 'react'
import { dmSerif } from '@/utils/fonts';
const BlogScreen = () => {
    const blogPosts = [
        {
          id: 1,
          date: '17 Jan, 2024',
          time: '10:45 AM',
          title: 'Boost Your Cricket Website with a Powerful Cricket API Integration',
          description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores.',
        },
        {
          id: 2,
          date: '17 Jan, 2024',
          time: '10:45 AM',
          title: 'Boost Your Cricket Website with a Powerful Cricket API Integration',
          description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores.',
        },
        {
          id: 3,
          date: '17 Jan, 2024',
          time: '10:45 AM',
          title: 'Boost Your Cricket Website with a Powerful Cricket API Integration',
          description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores.',
        },
      ];
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Latest <span className={`${dmSerif.variable} font-dmSerif text-red-600  font-thin italic`}>News & Blogs</span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        All important tours, series, and domestic tournaments from across the world are included in the CricSportz cricket data stream.
        data stream may be utilized in a variety of applications, including but not limited to
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <div key={post.id} className="flex justify-center flex-col items-center overflow-hidden h-[80vh] ">
          {/* Card Image Section */}
          <div className="overflow-hidden rounded-xl h-80 bg-purple-900">
            {/* Stadium Light Effects */}
            <img
              src="/liveCricket.png"
              alt="Cricket API"
              className="w-full h object-fit"
            />
          </div>

          {/* Card Content */}
          <div className="py-4 ">
            {/* Date and Time */}
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <div className="w-4 h-4 rounded-lg flex items-center justify-center">
                <img src="/calender.png" alt="Background" width={80} height={80} className="object-fit" priority />
              </div>
              <span>{post.date} | {post.time}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              {post.description}
            </p>

            {/* Read More Button */}
            <button className="flex space-x-3 justify-center  items-center mt-4 p-8  py-3 border-2 border-red-600 text-red-600  font-thin rounded-lg hover:bg-red-600 hover:text-white transition-colors">
              <span> Read More</span>
              <ArrowRight className="bg-red-700 p-1 rounded-full text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default BlogScreen