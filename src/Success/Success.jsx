import PropTypes from "prop-types";
import "./Success.css";

function Success({ email, setSuscribe }) {
  const dismiss = () => {
    setSuscribe(false);
  };

  return (
    <section className="success">
      <img className="icon-success" src="/images/icon-success.svg" alt="" />
      <h2 className="success-title">Thanks for subscribing</h2>
      <p className="success-text">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        ope it and clicke the button inside to confirm your subscription.
      </p>

      <button className="success-button" onClick={dismiss}>
        Dissmiss message
      </button>
    </section>
  );
}

export { Success };

Success.propTypes = {
  email: PropTypes.string.isRequired,
  setSuscribe: PropTypes.func.isRequired,
};
