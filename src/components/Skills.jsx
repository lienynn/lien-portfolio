import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20"> 
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            My technology stack is continuously growing - <br />
            I am mainly working with Javascript &amp; React at the moment 👩🏻‍💻
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center">
              <div className="px-8 py-10 rounded-lg bg-violet-300/95 mb-5 w-full max-w-md">
                <h1 className="title-font text-xl font-medium text-white mb-3 text-center">
                  {skill.title}
                </h1>
                <h2 className="tracking-widest text-md title-font font-medium text-white mb-1 text-center">
                  {skill.stack}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
