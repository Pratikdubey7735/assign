"use client"
import { useEffect, useState } from 'react';
import BlogCard from './components/BlogCard.js';
import Header from './components/Header';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(res => res.json())
      .then(data => setPosts(data.data));
  }, []);

  console.log("posts",posts)

  return (
        <div>
      <Header />
      <div className="container mx-auto p-4">
        {posts.map(post => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}