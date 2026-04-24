import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import resumeData from "../data/resumeData";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactCards = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: resumeData.contact.address,
      color: "var(--accent-primary)",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: resumeData.contact.phone,
      color: "var(--accent-emerald)",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: resumeData.about.email,
      color: "var(--accent-pink)",
    },
  ];

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-label">Say Hello</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="contact__cards">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              className="contact__card glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={i}
            >
              <div
                className="contact__card-icon"
                style={{ background: `${card.color}15`, color: card.color }}
              >
                {card.icon}
              </div>
              <h4 className="contact__card-title">{card.title}</h4>
              <p className="contact__card-value">{card.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="contact__form-wrapper glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={3}
        >
          <div className="contact__form-header">
            <h3>Send me a message</h3>
            <p>I&apos;ll get back to you as soon as possible</p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} id="contactForm">
            <div className="contact__form-grid">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                className="contact__input"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              id="contact-submit-btn"
            >
              <FaPaperPlane />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <motion.p
                className="contact__success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Thank you! Your message has been sent successfully.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
