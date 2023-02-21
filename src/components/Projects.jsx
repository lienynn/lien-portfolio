import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-black bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            An assortment of some projects I've worked on - big and small 🌱
          </p>
          
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="grid-cols-2 h-15 w-15 px-8 py-10 relative z-10 w-full border-4 border-indigo-200 bg-indigo-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">
                    {project.stack}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-black">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}