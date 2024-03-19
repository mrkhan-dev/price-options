import {useEffect, useState} from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [price, setPrice] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPrice(data));
  }, []);
  return (
    <div className="m-2 md:m-20 mt-20">
      <h2 className="text-4xl md:text-5xl text-center">
        Best Prices in the Town
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mt-4">
        {price.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
