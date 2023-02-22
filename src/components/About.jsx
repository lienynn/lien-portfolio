import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


export default function About() {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-black">
            Hi! I'm Lien, a 
            <RoughNotation type="highlight" show={true} color="#F3b8d7" animated="true"> fullstack developer </RoughNotation> 
            based in Montreal.
        </h1>
          <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-black">
            I'm passionate about telling 
            <RoughNotation type="highlight" show={true} color="#B8dbf3" animated="true">stories through code and design</RoughNotation>
          </h2>
          <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-black"> and love building thoughtful, user-friendly minimalistic applications.</h2>
          <p className="mb-8 leading-relaxed">
          I have an <RoughNotation type="highlight" show={true} color="#DAF7BE" animated="true"> acuity for problem solving</RoughNotation> and as a lifelong learner - I am eager to continuously grow my skills in order to keep up to date with the fast-changing trends within the industry and further my skillset 🚀 👩🏻‍💻
          </p>
          <div className="flex justify-center">
            <a
              href="https://ca.linkedin.com/in/liennyn"
              className="inline-flex text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              View LinkedIn
            </a>
            <a
              href="https://github.com/lienynn"
              className="ml-4 inline-flex text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              View GitHub
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-center h-21 w-21 rounded"
            alt="profile photo"
            src="./profilepic.png"
          />
        </div>
      </div>
    </section>
  
  );
}