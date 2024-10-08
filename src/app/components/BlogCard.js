"use client"
import Link from 'next/link';
import Button from './Button';
import { useRouter } from 'next/navigation';



export default function BlogCard({ post,setClick }) {
  const router=useRouter()
  const handleDelete = async () => {
    const data=await fetch(`http://localhost:4000/api/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id:post._id})
    });
    if(data.ok){
      setClick(true)
    }
    console.log(data,post._id)
    }
  const handleClick = () => {
    // Navigate to the dynamic route programmatically
    router.push(`/id/${post._id}`);
  };

  console.log("post at blog",post._id)

  return (
    <div className="relative shadow-lg rounded-lg overflow-hidden bg-white transition-shadow duration-300 ease-in-out hover:shadow-2xl border border-gray-200 m-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://source.unsplash.com/random/800x600")' }}></div>

      {/* Content with Overlay */}
      <div className="relative p-6 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 bg-opacity-80 rounded-lg">
        <h2 className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="mt-2 text-gray-200">
          {post.content.substring(0, 100)}...
        </p>
        <div className="mt-4 flex justify-between items-center">
          {/* <Link href={`/id/${post._id}`} passHref> */}
            <Button onClick={handleClick} className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200">
              View
            </Button>
          {/* </Link> */}
          <Button
            onClick={handleDelete}
            className="ml-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
