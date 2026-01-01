import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, GraduationCap, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Auto hide messages after 15 seconds
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
    <section className="min-h-screen flex items-center justify-center px-4 py-16 ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT – Details */}
        <div className="glass-card p-8 space-y-6 animate-slideUp opacity-0">
          <h2 className="text-3xl font-bold text-white mb-2">
            Connect with <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div className="space-y-4">
            {/* Primary Email */}
            <a href="mailto:vishnupriya@gmail.com" className="glass-item flex items-center gap-4">
              <Mail className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Primary Email</p>
                <p className="text-white">tkvishnupriyacse@gmail.com</p>
              </div>
            </a>

            {/* Alternate Email */}
            <a href="mailto:vishnupriya.alt@gmail.com" className="glass-item flex items-center gap-4">
              <Mail className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Alternate Email</p>
                <p className="text-white">23cseb28.vishnupriya.tk@gmail.com</p>
              </div>
            </a>

            {/* Mobile */}
            <a href="tel:+91XXXXXXXXXX" className="glass-item flex items-center gap-4">
              <Phone className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Mobile</p>
                <p className="text-white">XXXX XXXX XXX</p>
              </div>
            </a>

            {/* Education */}
            <div className="glass-item flex items-center gap-4">
              <GraduationCap className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Education</p>
                <p className="text-white">B.E Computer Science & Engineering</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/vishnu-priya-t-k-334288308/" target="_blank" rel="noreferrer"
               className="glass-item flex items-center gap-4">
              <Linkedin className="text-blue-400" />
              <p className="text-white">LinkedIn</p>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Vishnupriya-TK" target="_blank" rel="noreferrer"
               className="glass-item flex items-center gap-4">
              <Github className="text-blue-400" />
              <p className="text-white">GitHub</p>
            </a>
          </div>
        </div>

        {/* RIGHT – Form */}
        <form ref={formRef} onSubmit={sendEmail} className="glass-card p-8 space-y-6 animate-slideUp opacity-0 delay-200">

          <h2 className="text-2xl font-bold text-white">Share Your Message</h2>

          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input type="text" name="name" required
                   className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input type="email" name="email" required
                   className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Subject</label>
            <input type="text" name="subject"
                   className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea name="message" rows="5" required
                      className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white outline-none focus:border-blue-500" />
          </div>

          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl">
            <Send size={18} /> Send Message
          </button>

          {success && <p className="text-green-400 text-center">🙏🏻Thank you! Your message has been sent.</p>}
          {error && <p className="text-red-400 text-center">❌ Something went wrong. Please try again.</p>}

        </form>
      </div>

      {/* Glassmorphism & Animations */}
      <style>
  {`
    .glass-card {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 2rem;
    }

    .glass-item {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 1rem;
      border-radius: 1rem;
      transition: all 0.3s ease;
    }

    .glass-item:hover {
      background: rgba(255,255,255,0.1);
    }

    /* Snappier Slide-up animation */
    @keyframes slideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .animate-slideUp {
      opacity: 0;
      animation: slideUp 0.5s ease-out forwards;
    }

    /* Stagger children quickly */
    .animate-slideUpParent > * {
      opacity: 0;
      animation: slideUp 0.5s ease-out forwards;
    }

    .animate-slideUpParent > *:nth-child(1) { animation-delay: 0.05s; }
    .animate-slideUpParent > *:nth-child(2) { animation-delay: 0.1s; }
    .animate-slideUpParent > *:nth-child(3) { animation-delay: 0.15s; }
    .animate-slideUpParent > *:nth-child(4) { animation-delay: 0.2s; }
    .animate-slideUpParent > *:nth-child(5) { animation-delay: 0.25s; }
    .animate-slideUpParent > *:nth-child(6) { animation-delay: 0.3s; }
  `}
</style>

    </section>
  );
};

export default Contact;
