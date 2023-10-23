import React from "react";
import { skills } from "../data";

export default function Skills() {
  const cardStyle = {
    height: "200px", // Adjust the height as needed
  };

  return (
    <section id="skills" className="text-black bg-white body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills & Technologies
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My technology stack is continuously growing 🧠
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="relative overflow-hidden transform hover:scale-105" style={cardStyle}>
              {/* Added inline style to set a fixed height for each card */}
              <div className="bg-violet-300 shadow-lg rounded-lg h-full">
                <div className="p-6 h-full">
                  <h1 className="text-xl font-medium text-white mb-3 text-center">
                    {skill.title}
                  </h1>
                  <h2 className="text-md font-medium text-white mb-1 text-center">
                    {skill.stack}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

