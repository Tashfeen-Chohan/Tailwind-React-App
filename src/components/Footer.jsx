import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
  FaGitSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 text-white">
      {/* Logo Section */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="text-sm py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          voluptatem consectetur ex quia modi officiis suscipit praesentium nisi
          a quibusdam?
        </p>
        <div className="flex justify-center md:justify-between md:w-[70%] gap-10 my-5">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>

      <div className="flex justify-around items-center py-5">
        {/* Solution Section */}
        <div>
          <h2 className="text-gray-400 font-bold pb-3">Solutions</h2>
          <ul className="space-y-2">
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-gray-400 font-bold pb-3">Company</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>Jobs</li>
            <li>Blogs</li>
            <li>Press</li>
          </ul>
        </div>
        {/* Nav Link Section */}
        <div>
          <h2 className="text-gray-400 font-bold pb-3">Nav Links</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Company</li>
            <li>Contact</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
