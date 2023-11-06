import "./Wrapper.css";
import PropTypes from "prop-types";

function Wrapper({ children }) {
  return <div className={`wrapper`}>{children}</div>;
}

export { Wrapper };

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
