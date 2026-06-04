import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, GraduationCap, Linkedin, Github, Send } from "lucide-react";

const contactFields = [
  {
    type: "link",
    href: "mailto:tkvishnupriyacse@gmail.com",
    icon: Mail,
    label: "Primary Email",
    value: "tkvishnupriyacse@gmail.com",
    bg: "bg-blue-500/15 border-blue-500/30 hover:bg-blue-500/25",
    iconColor: "text-blue-400",
  },
  {
    type: "link",
    href: "mailto:23cseb28.vishnupriya.tk@gmail.com",
    icon: Mail,
    label: "Alternate Email",
    value: "23cseb28.vishnupriya.tk@gmail.com",
    bg: "bg-indigo-500/15 border-indigo-500/30 hover:bg-indigo-500/25",
    iconColor: "text-indigo-400",
  },
  {
    type: "link",
    href: "tel:9042407180",
    icon: Phone,
    label: "Mobile",
    value: "9042407180",
    bg: "bg-emerald-500/15 border-emerald-500/30 hover:bg-emerald-500/25",
    iconColor: "text-emerald-400",
  },
  {
    type: "div",
    icon: GraduationCap,
    label: "Education",
    value: "B.E Computer Science & Engineering",
    bg: "bg-violet-500/15 border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    type: "link",
    href: "https://www.linkedin.com/in/vishnu-priya-t-k-334288308/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn",
    bg: "bg-sky-500/15 border-sky-500/30 hover:bg-sky-500/25",
    iconColor: "text-sky-400",
  },
  {
    type: "link",
    href: "https://github.com/Vishnupriya-TK",
    icon: Github,
    label: "GitHub",
    value: "GitHub",
    bg: "bg-slate-500/20 border-slate-400/30 hover:bg-slate-500/30",
    iconColor: "text-slate-300",
  },
];

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

  const FieldWrapper = ({ field, children }) => {
    const className = `flex items-center gap-3 p-3 sm:p-4 rounded-xl border transition ${field.bg}`;
    if (field.type === "link") {
      return (
        <a href={field.href} target="_blank" rel="noreferrer" className={className}>
          {children}
        </a>
      );
    }
    return <div className={className}>{children}</div>;
  };

  return (
    <section className="page-connect min-h-screen flex items-center justify-center px-4 py-14 text-slate-200">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div className="glass-card p-5 md:p-8 space-y-4 animate-slideUp opacity-0">
          <h2 className="page-title text-left text-xl md:text-2xl">
            Connect with <span className="text-[#74b9ff]">Me</span>
          </h2>

          <p className="text-slate-400 text-sm">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div className="space-y-3">
            {contactFields.map((field) => {
              const Icon = field.icon;
              return (
                <FieldWrapper key={field.label} field={field}>
                  <Icon size={18} className={field.iconColor} />
                  <div className="min-w-0">
                    {field.label !== field.value && (
                      <p className="text-xs text-slate-500">{field.label}</p>
                    )}
                    <p className="text-sm text-white font-medium break-all">{field.value}</p>
                  </div>
                </FieldWrapper>
              );
            })}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="glass-card p-5 md:p-8 space-y-4 animate-slideUp opacity-0 delay-200"
        >
          <h2 className="text-lg md:text-xl font-semibold text-white">Share Your Message</h2>

          <div>
            <label className="text-xs text-slate-400">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-2.5 rounded-xl border border-white/15 bg-[#151b28] text-sm text-white outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2.5 rounded-xl border border-white/15 bg-[#151b28] text-sm text-white outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full mt-1 p-2.5 rounded-xl border border-white/15 bg-[#151b28] text-sm text-white outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full mt-1 p-2.5 rounded-xl border border-white/15 bg-[#151b28] text-sm text-white outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#2e67f2] hover:bg-[#2563eb] text-white font-semibold py-2.5 md:py-3 rounded-xl text-sm md:text-base"
          >
            <Send size={16} /> Send Message
          </button>

          {success && (
            <p className="text-green-400 text-xs md:text-sm text-center">
              Thank you! Your message has been sent.
            </p>
          )}
          {error && (
            <p className="text-red-400 text-xs md:text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.5s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default Contact;
