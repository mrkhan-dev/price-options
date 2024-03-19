import PropTypes from "prop-types";
import {FaCheckCircle} from "react-icons/fa";
const Features = ({features}) => {
  return (
    <div>
      <p className="ml-10 text-xl flex items-center gap-2">
        {" "}
        <FaCheckCircle className="text-green-500"></FaCheckCircle> {features}
      </p>
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.array,
};

export default Features;
