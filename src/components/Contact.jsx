import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const [state, handleSubmit] = useForm("xknarqnd");
  if (state.succeeded) {
      return <p className="text-center">Thanks for the message!</p>;
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
          <h2 className="text-center text-3xl mb-1 font-medium title-font">
              FANCY A CHAT?
          </h2>
          <p className="text-center text-lg mb-4 font-medium title-font">Send me a message!</p>
          <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-8">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
              </div>
              <button
                type="submit"
                className="text-white bg-violet-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg mx-auto block">
                Submit
              </button>
            </form>
          </div>
    </section>

  );
}
