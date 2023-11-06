import "./Info.css";

function Info() {
  return (
    <section className="info">
      <h1>Stay updated!</h1>

      <p className="info-text">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <div className="info-list-container">
        <ul className="info-list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
      </div>
    </section>
  );
}

export { Info };
