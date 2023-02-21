import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center">
        <h1 className="title-font text-xl font-medium text-black mb-4 md:mb-0 pr-5">
            LIEN NGUYEN
        </h1>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base">
          <a href="#aboutme" className="ml-5 mr-5 hover:text-indigo-200">
            About Me
          </a>
          <a href="#projects" className="mr-5 hover:text-indigo-200">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-indigo-200">
            Technology
          </a>
          {/* <a href="#" className="mr-5 hover:text-indigo-200">
            Resume
          </a> */}
          <a href="#contact" className="mr-5 hover:text-indigo-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
