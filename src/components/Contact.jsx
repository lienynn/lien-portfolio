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
      return <p clasName="justify-center">Thanks for the message!</p>;
  }

  return (
    <section id="contact" className="relative">
    <div className="container flex justify-center px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <form onSubmit={handleSubmit}>
      <h2 className="flex justify-center text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
          FANCY A CHAT?
      </h2>
      <p className="flex justify-center text-black text-lg mb-1 font-medium title-font">Send me a messasge!</p>
      <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-zinc-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
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
              className="w-full bg-zinc-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-zinc-50 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
            className="text-white bg-violet-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
            Submit
          </button>
        </form>
        </div>
    </section>
 
    
  );
}
