import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({option}) => {
  const {name, features, price} = option;
  return (
    <div className="bg-blue-500 text-white rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-center text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <p className="text-3xl text-center my-8">{name}</p>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} features={feature}></Features>
        ))}
      </div>
      <button className="mt-12 py-2 bg-green-500 w-full font-bold rounded-lg">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
