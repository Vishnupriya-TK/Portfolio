import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, GraduationCap, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        () => setError(true)
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-14">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">

        {/* LEFT – Details */}
        <div className="glass-card p-5 md:p-8 space-y-4 animate-slideUp opacity-0">
          <h2 className="text-xl md:text-3xl font-bold text-white">
            Connect with <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div className="space-y-3">
            <a href="mailto:tkvishnupriyacse@gmail.com" className="glass-item flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <div>
                <p className="text-xs md:text-sm text-gray-400">Primary Email</p>
                <p className="text-sm md:text-base text-white break-all">
                  tkvishnupriyacse@gmail.com
                </p>
              </div>
            </a>

            <a href="mailto:23cseb28.vishnupriya.tk@gmail.com" className="glass-item flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <div>
                <p className="text-xs md:text-sm text-gray-400">Alternate Email</p>
                <p className="text-sm md:text-base text-white break-all">
                  23cseb28.vishnupriya.tk@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+91XXXXXXXXXX" className="glass-item flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <div>
                <p className="text-xs md:text-sm text-gray-400">Mobile</p>
                <p className="text-sm md:text-base text-white">XXXX XXXX XXX</p>
              </div>
            </a>

            <div className="glass-item flex items-center gap-3">
              <GraduationCap size={18} className="text-blue-400" />
              <div>
                <p className="text-xs md:text-sm text-gray-400">Education</p>
                <p className="text-sm md:text-base text-white">
                  B.E Computer Science & Engineering
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/vishnu-priya-t-k-334288308/"
              target="_blank"
              rel="noreferrer"
              className="glass-item flex items-center gap-3"
            >
              <Linkedin size={18} className="text-blue-400" />
              <p className="text-sm md:text-base text-white">LinkedIn</p>
            </a>

            <a
              href="https://github.com/Vishnupriya-TK"
              target="_blank"
              rel="noreferrer"
              className="glass-item flex items-center gap-3"
            >
              <Github size={18} className="text-blue-400" />
              <p className="text-sm md:text-base text-white">GitHub</p>
            </a>
          </div>
        </div>

        {/* RIGHT – Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="glass-card p-5 md:p-8 space-y-4 animate-slideUp opacity-0 delay-200"
        >
          <h2 className="text-lg md:text-2xl font-bold text-white">
            Share Your Message
          </h2>

          <div>
            <label className="text-xs md:text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-2.5 md:p-3 rounded-xl bg-white/10 text-sm md:text-base text-white outline-none"
            />
          </div>

          <div>
            <label className="text-xs md:text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2.5 md:p-3 rounded-xl bg-white/10 text-sm md:text-base text-white outline-none"
            />
          </div>

          <div>
            <label className="text-xs md:text-sm text-gray-400">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full mt-1 p-2.5 md:p-3 rounded-xl bg-white/10 text-sm md:text-base text-white outline-none"
            />
          </div>

          <div>
            <label className="text-xs md:text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full mt-1 p-2.5 md:p-3 rounded-xl bg-white/10 text-sm md:text-base text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-xl text-sm md:text-base"
          >
            <Send size={16} /> Send Message
          </button>

          {success && (
            <p className="text-green-400 text-xs md:text-sm text-center">
              🙏🏻 Thank you! Your message has been sent.
            </p>
          )}
          {error && (
            <p className="text-red-400 text-xs md:text-sm text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      <style>
        {`
          .glass-card {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 1.8rem;
          }

          .glass-item {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 0.75rem;
            border-radius: 1rem;
            transition: all 0.3s ease;
          }

          .glass-item:hover {
            background: rgba(255,255,255,0.1);
          }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slideUp {
            animation: slideUp 0.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
