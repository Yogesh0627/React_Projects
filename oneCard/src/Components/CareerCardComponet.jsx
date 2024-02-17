import React from "react";

const CareerCardComponet = ({ job, loc }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between  h-44 w-4/5 m-auto border-b-2 px-5 border-black items-center">
      <div>
        <div>
          <h3 className="text-xl w-80 font-bold  text-left font-serif ">
            {job}
          </h3>
          <p className="text-left text-lg ">{loc}</p>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-b from-[#217ee6] to-[#2498e3] text-white  h-11 w-36 rounded-lg text-base font-semibold font-serif">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CareerCardComponet;
