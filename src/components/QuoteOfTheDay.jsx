import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "./QuoteOfTheDay.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const QuoteOfTheDay = () => {
  return (
    <section className="quote-section section-padding">
      <div className="container">
        <motion.div
          className="quote-card glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          
          <div className="quote-content">
            <h2 className="quote-title">Quote of the Day</h2>
            {/* We use an iframe to safely load the BrainyQuote script because it uses document.write(), which would break React if injected directly */}
            <iframe
              src="/quote.html"
              title="Quote of the Day"
              className="quote-iframe"
              scrolling="no"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteOfTheDay;
