import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
        <div>
          <h1 className="title-font text-xl font-extrabold text-black mb-4 md:mb-0 pr-5">
              LIEN NGUYEN
          </h1>
        </div>
        <div>
          <nav className="flex flex-wrap items-center text-base">
            <a href="#about" className="ml-5 mr-5 hover:text-violet-400">
              About Me
            </a>
            <a href="#projects" className="mr-5 hover:text-violet-400">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-violet-400">
              Technology
            </a>
            <a href="#contact" className="mr-5 hover:text-violet-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
