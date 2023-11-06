import PropTypes from "prop-types";
import "./SuscribeButton.css";

function SuscribeButton({ email, setError, setSuscribe }) {
  const validateEmail = (email) => {
    if (!email) {
      setError(true);
      return;
    }

    const regex = /\S+@\S+\.\S+/;
    const isValid = regex.test(email);

    if (!isValid) {
      setError(true);
      return;
    }

    setError(false);
    setSuscribe(true);
  };

  return (
    <section className="suscribe">
      <button className="button-suscribe" onClick={() => validateEmail(email)}>
        Suscribe to monthly newsletter
      </button>
    </section>
  );
}

export { SuscribeButton };

SuscribeButton.propTypes = {
  email: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setSuscribe: PropTypes.func.isRequired,
};
