import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS Error:", err);

      setName("");
      setEmail("");
      setMessage("");

      alert("Failed to send message.");
    }
  };
  return (
    <div id="contact-me" className="bg-background text-white px-14 pb-24">
      <hr className="border-black" />
      <h1 className="section-heading">Contact Me</h1>
      <p className="text-center text-lg mt-3 opacity-80 mb-20">
        Have a project in mind, an opportunity to discuss, or just want to
        connect? Feel free to reach out.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-surface p-6 max-w-fit mx-auto rounded-xl flex flex-col items-center gap-6"
      >
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <label>NAME</label>
            <input
              className="bg-black rounded-md p-4 h-8 w-[20rem]"
              value={name}
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>EMAIL</label>
            <input
              className="bg-black rounded-md p-4 h-8 w-[20rem]"
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col min-w-full gap-2">
          <label>MESSAGE</label>
          <textarea
            className="bg-black p-4 h-48 rounded-md"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-black cursor-pointer text-red-500 max-w-fit py-2 px-4 rounded-md"
          value="SUBMIT"
        />
      </form>
    </div>
  );
}

export default Contact;
