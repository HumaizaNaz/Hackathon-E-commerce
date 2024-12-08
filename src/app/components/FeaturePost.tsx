import Image from 'next/image';
import React from 'react';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'Loudest à la Madison #1 (L’intégral)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '27 April 2021',
      comments: 10,
      image: '/post/01.png', // Replace with your actual images
    },
    {
      id: 2,
      title: 'Loudest à la Madison #1 (L’intégral)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
      image: '/post/02.png', // Replace with your actual images
    },
    {
      id: 3,
      title: 'Loudest à la Madison #1 (L’intégral)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
      image: '/post/03.jpg', // Replace with your actual images
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-32 py-12">
      {/* Header */}
      <div className="h-[134px] w-full max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Featured Posts</h2>
        <p className="text-gray-600 mb-12">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={post.image}
                alt={post.title}
                width={348}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-xs">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <button className="mt-4 text-blue-500 text-sm font-semibold hover:underline">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
