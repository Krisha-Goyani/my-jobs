import React, { useContext } from "react";
import { PriceContext } from "../context/PriceContext";

const PriceTable = () => {
  const { prices } = useContext(PriceContext);

  if (!prices) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="price-table  rounded-3xl  border-border-green border-2">
      <h2 className="mt-2 text-xl font-bold py-2 px-4 font-circular-air-pro text-center">
        Price Table
      </h2>
      <table className="mt-4 mb-2 w-full">
        <thead>
          <tr className="text-lg font-medium text-text-gray font-circular-std">
            <th className="py-2 pl-8 text-left">Service</th>
            <th className="py-2 pr-8 text-left">Rate per hr</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((item, index) => (
            <tr key={index} className={`py-2 px-8 font-circular-std ${index === prices.length - 1 ? '' : 'border-b border-border-secondary'}`}>
              <td className="py-2 pl-8 text-left">
                {item.service} <br />
                <small className="text-text-gray">
                  in {item.category}
                </small>
              </td>
              <td className="py-2 pr-8 text-left">{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
