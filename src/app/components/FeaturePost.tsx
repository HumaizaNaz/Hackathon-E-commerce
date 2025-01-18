'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { RiAlarmLine } from "react-icons/ri";
import { client } from "@/sanity/lib/client";
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  date: string;
  image: string;
  content: string;
  name: string;
}

export default function FeaturedPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res: Post[] = await client.fetch(
          `*[_type == "blog"]{
            _id,
            title,
            date,
            "image": image.asset->url,
            content,
            name
          }`
        );
        setPosts(res);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="px-6 sm:px-12 lg:px-32 py-12">
      {/* Header */}
      <div className="h-[134px] w-full max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Featured Posts</h2>
        <p className="text-gray-600 mb-16">
          Discover how innovation meets simplicity to redefine the way you shop every day.
        </p>
      </div>

      {/* Posts */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 flex flex-col"
          >
            <div className="relative w-full mt-12 h-[300px]">
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
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-lg mb-4">{post.content.substring(0, 100)}...</p>
              <div className="flex items-center text-gray-500 text-base mb-4">
                <RiAlarmLine className="text-blue-500 mr-1" />
                <span>{post.date}</span>
              </div>
              <Link
                href={`/blog/${post._id}`}
                className="flex items-center gap-x-1 cursor-pointer mt-auto"
              >
                <p className="text-blue-500 hover:text-blue-700 text-xl">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
