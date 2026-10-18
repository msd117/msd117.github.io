import resumeData from "../data/resumeData";

// Same quote for every visitor on a given (local) day; it changes at midnight.
const pickQuote = (date) => {
  const quotes = resumeData.quotes;
  const day = Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 86400000);
  return quotes[day % quotes.length];
};

const QuoteOfTheDay = () => {
  const today = new Date();
  const quote = pickQuote(today);
  const dateLabel = today.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

  return (
    <section className="light" aria-labelledby="qotd-h">
      <div className="wrap qotd__pad">
        <figure className="term">
          <div className="code__bar">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <h2 id="qotd-h" className="mono code__file">quote of the day</h2>
            <time className="mono term__date" dateTime={today.toISOString().slice(0, 10)}>{dateLabel}</time>
          </div>
          <div className="term__body">
            <p className="mono term__line">
              <span className="term__path">~/msd</span> <span className="term__dollar">$</span> fortune --today
            </p>
            <blockquote className="disp term__quote">“{quote.text}”</blockquote>
            <figcaption className="mono term__by">— {quote.by}</figcaption>
            <p className="mono term__line" aria-hidden="true">
              <span className="term__path">~/msd</span> <span className="term__dollar">$</span>{" "}
              <span className="caret term__cursor" />
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default QuoteOfTheDay;
