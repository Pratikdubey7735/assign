"use client";
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import {useRouter} from 'next/router';

export default function ViewPost() {
  const [post, setPost] = useState(null);
   const Router=useRouter();
   const {id}=Router.query
  useEffect(() => {
    if (id) {
      fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id]);

  if (!post) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6 md:p-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
            <h1 className="text-4xl font-extrabold">{post.title}</h1>
          </div>
          <div className="p-6">
            <p className="text-gray-800 text-lg">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
