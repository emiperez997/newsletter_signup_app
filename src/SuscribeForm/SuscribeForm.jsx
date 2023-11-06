import PropTypes from "prop-types";
import "./SuscribeForm.css";

function SuscribeForm({ setEmail, error, setError }) {
  const handleEmail = (e) => {
    if (error) {
      setError(false);
      return;
    }
    setEmail(e.target.value);
  };

  return (
    <section className="suscribe-form">
      <div className="container-text">
        <label className="email-label" htmlFor="email">
          Email addres:
        </label>
        {error && <span className="error">Valid Email Required</span>}
      </div>
      <input
        type="email"
        name="email"
        id="email"
        className={`email-input ${error ? "error-input" : ""}`}
        placeholder="email@company.com"
        onChange={handleEmail}
      />
    </section>
  );
}

export { SuscribeForm };

SuscribeForm.propTypes = {
  setEmail: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
};
