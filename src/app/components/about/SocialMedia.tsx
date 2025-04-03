import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "@/src/app/index/AboutIndex";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 p-4">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black"
      >
        <FaGithub size={24} />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
