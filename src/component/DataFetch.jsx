import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const DataFetch = () =>{
    const [user, SetUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
        .then((response)=> response.json())
        .then((data) =>{
            SetUser(data.results[0]);
            SetLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching data:", error);
            SetLoading(false);
        })
    },[]);
    if (loading) return <p className ="text-center text-gray-500">Loading...</p>;

    return(
        
    
<div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 shadow-xl rounded-2xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-4 border-pink-500 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
">
      {/* User Image */}
      <div className="flex items-center">
        <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-pink-500 shadow-md">
          <img
            src={user.picture.large}
            alt={`${user.name.first}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* User Details */}
        <div className="ml-6 bg-pink-100 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-extrabold text-pink-500">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="font-medium text-pink-600">Gender:</span> {user.gender}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium text-pink-600">Phone:</span> {user.phone}
          </p>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="#"
          className="text-pink-500 text-2xl hover:text-pink-900 transition-colors duration-200 cursor-pointer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-pink-500 text-2xl hover:text-pink-800 transition-colors duration-200 cursor-pointer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-pink-500 text-2xl hover:text-pink-800 transition-colors duration-200 cursor-pointer"
          title="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      {/* Interests or Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-200 text-gray-800 font-medium py-1 px-3 rounded-full shadow cursor-pointer">
          Web Development
        </span>
        <span className="bg-pink-200 text-gray-800 font-medium py-1 px-3 rounded-full shadow cursor-pointer">
          Java Development
        </span>
        <span className="bg-purple-200 text-gray-800 font-medium py-1 px-3 rounded-full shadow cursor-pointer">
          MERN Stack
        </span>
      </div>
    </div>
  );
};

export default DataFetch;